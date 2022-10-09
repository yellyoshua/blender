// eslint-disable-next-line id-length
import _ from 'underscore';
import usersModel from './users.model';

export default {
  users: {
    find: (filter, options, req) => {
      const {user_id} = req.auth_payload;
      if (_.isEmpty(filter)) {
        filter._id = user_id;
      }
      return usersModel.find(filter, options);
    }
  }
};
