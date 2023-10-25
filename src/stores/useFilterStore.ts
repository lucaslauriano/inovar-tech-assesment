import { create } from 'zustand';

type SearchTermProps = {
  inputTerm: string;
  filterTerm: string;
  type: string;
};

export interface FilterStore {
  searchTerms: SearchTermProps;
  setSearchTerms: (searchTerms: SearchTermProps) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  searchTerms: {
    inputTerm: '',
    filterTerm: '',
    type: 'title',
  },
  setSearchTerms: (searchTerms: SearchTermProps) => {
    set((state) => ({ ...state, searchTerms }));
  },
}));
