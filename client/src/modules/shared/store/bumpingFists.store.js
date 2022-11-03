import createStore from 'zustand';
import services from '../../core/services';

const bumping_fists_populate = [
  'emisor',
  'receptor'
].join(',');

export const useBumpingFistsStore = createStore((set) => ({
  bumpingFists: [],
  loading: false,
  getBumpingFists: async () => {
    set({loading: true});
    const bumpingFists = await services.bumpingFists.get({
      ___populate: bumping_fists_populate
    });
    set({bumpingFists, loading: false});
  }
}));
