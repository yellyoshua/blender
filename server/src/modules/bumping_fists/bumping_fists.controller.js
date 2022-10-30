import bumpingFistsModel from './bumping_fists.model';
import bumpingFistsMatcher from './services/bumpingFistsMatcher';

export default {
  find: bumpingFistsModel.find,
  create (body, req) {
    const emisor = req.auth_payload.user_id;
    const receptor = body.receptor;

    return bumpingFistsMatcher(emisor, receptor);
  }
};
