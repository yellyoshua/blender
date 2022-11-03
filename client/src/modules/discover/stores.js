import createStore from 'zustand';

import services from '../core/services';

export const useDiscoverStores = createStore((set) => ({
  potentialMatch: null,
  loading: false,
  discover: async () => {
    set({ loading: true, error: null });
    try {
      const potentialMatch = await services.discover.get();
      set({ potentialMatch });
    } catch (error) {
      set({ error });
    } finally {
      set({ loading: false });
    }
  }
}));

export const useBumpFistsStore = createStore((set) => ({
  bumpFist: null,
  loading: false,
  addBumpFist: async (receptor) => {
    set({loading: true});
    const bumpFist = await services.bumpingFists.post({receptor});
    set({bumpFist, loading: false});
  }
}));
