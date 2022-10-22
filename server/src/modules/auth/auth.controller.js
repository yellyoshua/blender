import usersModel from '../users/users.model';
import googleAuthService from '../../services/google-auth.service';
import jsonwebtokenService from '../../services/jsonwebtoken.service';
import sessionsModel from '../sessions/sessions.model';
import requestService from '../shared/services/request.service';

const jwt = jsonwebtokenService();

export default {
  google: () => ({redirect: googleAuthService.newAuthorizeUrl()}),
  googleCallback: async (params, options, req) => {
    const client_tokens = await googleAuthService.claimTokens(params.code);
    const client_data = await googleAuthService.getPersonData(
      client_tokens.access_token,
      client_tokens.refresh_token
    );

    const user = await get_or_create_user(client_data);
    const request_details = get_request_details(req);

    const new_session_data = {
      user: user._id,
      ip: request_details.ip,
      user_agent: request_details.user_agent
    };

    const session = await sessionsModel.create(new_session_data);
    const jwt_payload = compose_jwt_payload(user, session);
    const accessToken = jwt.sign(jwt_payload);

    return {
      redirect: `${process.env.FRONTEND_URL}/?accessToken=${accessToken}`
    };
  }
};

function get_request_details (req) {
  const ip = requestService.get_ip(req);
  const user_agent = requestService.get_user_agent(req);
  return {ip, user_agent};
}

async function get_or_create_user (client_data) {
  const new_user_data = {
    first_name: client_data.given_name,
    last_name: client_data.family_name,
    picture: client_data.picture,
    email: client_data.email_address,
    provider: 'google',
    provider_user_id: client_data.id
  };

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


function compose_jwt_payload (user, session) {
  return {
    user_id: user._id,
    session_id: session._id
  };
}
