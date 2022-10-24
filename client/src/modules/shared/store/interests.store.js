import createStore from 'zustand';
import services from '../../core/services';

export const useInterestsStores = createStore((set) => ({
  interests: [],
  loading: false,
  getInterests: async () => {
    set({loading: true});
    const interests = await services.interests.get();
    set({interests});
    set({loading: false});
  }
}));
