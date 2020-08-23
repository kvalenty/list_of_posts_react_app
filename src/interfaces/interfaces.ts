export interface Action {
  type: string;
  payload: any | any[];
}

export interface Comment {
  id: string;
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
