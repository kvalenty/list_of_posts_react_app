export interface Action<T> {
  type: string;
  // payload: Post | Comment | Post[] | Comment[] | number | string;
  payload: T;
}

export interface Comment {
  id: number;
  postId: number;
  body: string;
}

export interface CommentUpload {
  postId: number;
  body: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
}

export interface Posts {
  posts: Post[];
}

export interface RootState {
  posts: Posts;
}
