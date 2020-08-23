export interface Action {
  type: string;
  payload: any | any[];
}

export interface Comment {
  id: string;
  postId: string;
  body: string;
}

export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface Posts {
  posts: Post[];
}

export interface RootState {
  posts: Posts;
}
