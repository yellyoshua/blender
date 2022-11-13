import createStore from 'zustand';
import services from '../../core/services';

export const useBumpingFistsStore = createStore((set) => ({
  bumpingFists: [],
  loading: false,
  getBumpingFists: async () => {
    set({loading: true});
    const bumpingFists = await services.bumpingFists.get();
    set({bumpingFists, loading: false});
  }
}));
