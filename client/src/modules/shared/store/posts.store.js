import createStore from 'zustand';

import services from '../../core/services';

export const useUserPostsStore = createStore((set, get) => ({
  posts: [],
  loading: false,
  getPosts: async (filter = {}) => {
    set({loading: true});
    set({posts: []});
    const posts = await services.posts.get(filter);
    set({posts});
    set({loading: false});
  },
  deletePost: async (post_id) => {
    set({loading: true});
    await services.posts.delete({_id: post_id});
    set({loading: false, posts: get().posts.filter((post) => post._id !== post_id)});
  }
}));
