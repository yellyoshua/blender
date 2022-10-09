import usersModel from '../users/users.model';
import googleAuthService from '../../services/google-auth.service';
import jsonwebtokenService from '../../services/jsonwebtoken.service';

const jwt = jsonwebtokenService();

export default {
  google: () => ({redirect: googleAuthService.newAuthorizeUrl()}),
  googleCallback: async (params) => {
    const client_tokens = await googleAuthService.claimTokens(params.code);
    const client_data = await googleAuthService.getPersonData(
      client_tokens.access_token,
      client_tokens.refresh_token
    );

    const new_user_data = {
      first_name: client_data.given_name,
      last_name: client_data.family_name,
      picture: client_data.picture,
      email: client_data.email_address,
      provider: 'google',
      provider_user_id: client_data.id
    };

    const user = await get_or_create_user(new_user_data);
    const jwt_payload = compose_jwt_payload(user, client_tokens, 'google');
    const accessToken = jwt.sign(jwt_payload);

    return {
      redirect: `${process.env.FRONTEND_URL}/?accessToken=${accessToken}`
    };
  }
};

async function get_or_create_user (new_user_data) {
  const [user] = await usersModel.find({
    email: new_user_data.email,
    provider: new_user_data.provider,
    provider_user_id: new_user_data.provider_user_id
  });

  if (!user) {
    return usersModel.create(new_user_data);
  }

  return user;
}


function compose_jwt_payload (user, client_tokens, provider) {
  return {user_id: user._id, access_token: client_tokens.access_token, provider: provider};
}
