import { render } from '@testing-library/react';
import React from 'react';

import PostList from '@/app/posts/components/PostList';
const mockData = [
  {
    id: 1,
    headline: 'Test Post 1',
    publisher: { url: 'example.com' },
    storyVoteScore: 10,
    articleSection: 'Technology',
    author: { imageUrl: 'author-image-url', name: 'John Doe' },
    createdAt: new Date(),
    comments: [],
  },
];

jest.mock('@/stores/useAppStore', () => ({
  useAppStore: () => ({
    posts: mockData,
    fetchPosts: jest.fn().mockResolvedValue([...mockData]),
  }),
}));

jest.mock('@/stores/useFilterStore', () => ({
  useFilterStore: () => ({
    searchTerms: '',
  }),
}));

describe('PostList Component', () => {
  it('should render a post when there are posts', () => {
    const { container } = render(<PostList />);
    const postElement = container.querySelector('.bg-white');

    expect(postElement).toBeInTheDocument();
  });

  it('should display "Sem dados" when no posts are found', () => {
    jest
      .spyOn(require('@/stores/useAppStore').useAppStore, 'posts', 'get')
      .mockReturnValue([]);
    const { container, getByText } = render(<PostList />);
    const noDataElement = getByText('Sem dados');
    const exclamationIcon = container.querySelector('.ExclamationTriangleIcon');

    expect(noDataElement).toBeInTheDocument();
    expect(exclamationIcon).toBeInTheDocument();
  });

  it('should render the "exchange_arrows" icon for "Load more"', () => {
    const { container } = render(<PostList />);
    const loadMoreIcon = container.querySelector('.exchange_arrows');

    expect(loadMoreIcon).toBeInTheDocument();
  });

  it('should render a post with the correct data', () => {
    const { getByText } = render(<PostList />);
    const postTitle = getByText('Test Post 1');
    const postAuthor = getByText('John Doe');

    expect(postTitle).toBeInTheDocument();
    expect(postAuthor).toBeInTheDocument();
  });
});
