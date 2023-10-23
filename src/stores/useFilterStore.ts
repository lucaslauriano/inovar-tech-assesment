import { create } from 'zustand';

export interface FilterStore {
  searchTerms: string;
  setSearchTerms: (searchTerms: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  searchTerms: '',
  setSearchTerms: (searchTerms: string) => {
    set((state) => ({ ...state, searchTerms }));
  },
}));
