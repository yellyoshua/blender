import createStore from 'zustand';
import services from '../../core/services';

export const useCommunitiesStores = createStore((set) => ({
  communities: [],
  loading: false,
  getCommunities: async () => {
    set({loading: true});
    const communities = await services.communities.get({
      ___populate: 'image,admins,interests,posts'
    });
    set({communities});
    set({loading: false});
  }
}));
