import type { Metadata } from 'next';

import PostList from '@/app/posts/components/PostList';

export const metadata: Metadata = {
  title: 'Postagens',
  description: 'This is the post page',
};

export default async function PostsPage() {
  return <PostList />;
}
