import usersModel from '../users/users.model';
import googleAuthService from '../../services/google-auth.service';

export default {
  github: async () => {
    await usersModel.find({});
    return 'github';
  },
  google: () => ({redirect: googleAuthService.newAuthorizeUrl()}),
  googleCallback: async (params) => {
    const client_tokens = await googleAuthService.claimTokens(params.code);
    const client_data = await googleAuthService.getPersonData(
      client_tokens.access_token,
      client_tokens.refresh_token
    );

    return client_data;
  }
};
