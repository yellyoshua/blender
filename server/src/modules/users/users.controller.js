import _ from 'underscore';
import usersModel from './users.model';

export default {
  find (filter, options, req) {
    const {user_id} = req.auth_payload;
    if (_.isEmpty(filter)) {
      filter._id = user_id;
    }
    return usersModel.find(filter, options);
  },
  async find_me (filter, options, req) {
    const {user_id} = req.auth_payload;
    const [me] = await usersModel.find({_id: user_id}, options);
    return me;
  },
  update_me (filter, data, req) {
    const {user_id} = req.auth_payload;
    const update_data = _(data || {}).pick('first_name', 'last_name');
    return usersModel.update({_id: user_id}, update_data);
  }
};
