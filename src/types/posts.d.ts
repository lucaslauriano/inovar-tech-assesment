export interface IResponse {
  id: number;
  headline: string;
  createdAt: string;
  storyVoteScore: number;
  articleSection: string;
  author: {
    name: string;
    imageUrl: string;
  };
  publisher: {
    name: string;
    url: string;
  };
  comments: Array<string>;
}

export type IPost = Omit<IResponse, 'id'>;
