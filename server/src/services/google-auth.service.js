// eslint-disable-next-line id-length
import _ from 'underscore';
import {OAuth2Client} from 'google-auth-library';

const client_permissions_scopes = [
  // Check: https://developers.google.com/people/api/rest/v1/people/get
  'openid',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
];


function instanceClient () {
  return new OAuth2Client(
    process.env.APP_GOOGLE_CLIENT_ID,
    process.env.APP_GOOGLE_CLIENT_SECRET,
    process.env.APP_GOOGLE_REDIRECT_URI
  );
}

function sanitizeBasicProfile (basic_profile = {}) {
  const {id, name, given_name, family_name, picture, locale} = basic_profile;
  return {id, name, given_name, family_name, picture, locale};
}

function sanitizeExtendedProfile (extended_profile = {}) {
  const {emailAddresses} = extended_profile;
  const email_address = _(emailAddresses).chain()
  .first()
  .pick('value')
  .value();

  return {email_address: email_address.value};
}

/**
 * Get basic profile fields from client
 * @param {import('google-auth-library').OAuth2Client} client
 */

async function requestBasicProfile (client) {
  const reponse = await client.request({
    url: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json'
  });

  return sanitizeBasicProfile(reponse.data);
}

/**
 * Get extended profile fields from client
 * @param {import('google-auth-library').OAuth2Client} client
 */

async function requestExtendedProfile (client) {
  const person_fields = _([
    'emailAddresses'
  ]).chain()
  .compact()
  .join(',')
  .value();

  const request_url = new URL('https://people.googleapis.com/v1/people/me');
  request_url.searchParams.append('personFields', person_fields);
  request_url.searchParams.append('sources', 'READ_SOURCE_TYPE_PROFILE');

  const reponse = await client.request({url: request_url.toString()});
  return sanitizeExtendedProfile(reponse.data);
}

export default {
  newAuthorizeUrl () {
    const client = instanceClient();
    return client.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent',
      scope: client_permissions_scopes
    });
  },
  async claimTokens (code) {
    const client = instanceClient();
    const credentials = await client.getToken(code);
    client.setCredentials(credentials.tokens);
    return credentials.tokens;
  },
  async getPersonData (access_token, refresh_token, params = {}) {
    const client = instanceClient();
    client.setCredentials({access_token, refresh_token});

    const [basic_profile, extended_profile] = await Promise.all([
      requestBasicProfile(client),
      requestExtendedProfile(client, params)
    ]);

    return {...basic_profile, ...extended_profile};
  }
};
