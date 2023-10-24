export interface IResponse {
  id: number;
  url: string;
  author: string;
  category: string;
  comments: number;
  likes: number;
  created_at: string;
  title: string;
}

export type IPost = Omit<IResponse, 'id'>;
