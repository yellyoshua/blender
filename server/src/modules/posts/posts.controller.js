/* eslint-disable id-length */
import _ from 'underscore';
import {PostNotFoundException} from '../shared/exceptions';
import postsModel from './posts.model';

export default {
  find (filter, options, req) {
    const user_id = req.auth_payload.user_id;

    if (filter.user && filter.user !== user_id) {
      const filter_options = _(filter).pick('user');
      filter_options.status = 'published';
      return postsModel.find(filter_options, options);
    }

    const filter_options = _(filter).pick('user', 'status');
    filter_options.user = user_id;
    filter_options.status = filter_options.status || 'published';
    filter_options.status = filter_options.status === 'all'
      ? ['published', 'draft', 'hidden']
      : filter_options.status;
    return postsModel.find(filter_options, options);
  },
  create (data, req) {
    const user_id = req.auth_payload.user_id;
    data.user = user_id;
    const data_options = _(data).pick('user', 'text');
    data_options.status = 'draft';
    return postsModel.create(data_options);
  },
  async update (filter, data, req) {
    const [post] = await postsModel.find({
      _id: filter._id, user: req.auth_payload.user_id
    });
    if (!post) {
      throw new PostNotFoundException();
    }

    const data_options = _(data).pick('text', 'status');
    return postsModel.update({_id: filter._id}, data_options);
  },
  async delete (filter, options, req) {
    const user_id = req.auth_payload.user_id;
    console.log('filter :', filter);
    console.log('user_id :', user_id);
    const [post] = await postsModel.find({
      _id: filter._id, user: user_id
    });

    if (!post) {
      throw new PostNotFoundException();
    }

    return postsModel.delete({_id: filter._id});
  }
};
