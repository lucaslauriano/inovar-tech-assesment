import { StateCreator, create } from 'zustand';

import { getAllposts } from '@/lib/getAllPosts';

export interface PostsStores {
  posts: any[];
  fetchPosts: () => void;
}
export const createPostsSlice: StateCreator<PostsStores> = (set) => ({
  posts: [] as any[],
  fetchPosts: async () => {
    const { posts } = await getAllposts();
    set({ posts });
  },
});

export const useAppStore = create<PostsStores>()((...a) => ({
  ...createPostsSlice(...a),
}));
