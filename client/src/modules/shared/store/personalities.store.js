import createStore from 'zustand';
import services from '../../core/services';

export const usePersonalitiesStores = createStore((set) => ({
  personalities: [],
  loading: false,
  getPersonalities: async () => {
    set({loading: true});
    const personalities = await services.personalities.get();
    set({personalities});
    set({loading: false});
  }
}));
