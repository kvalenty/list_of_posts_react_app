import { Action, Post, Comment } from '../interfaces/interfaces';
import {
  SET_POSTS,
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  SET_COMMENTS,
  UPDATE_COMMENTS,
} from './actionTypes';

interface InitialState {
  posts: Post[];
  comments: Comment[];
}

const initialState: InitialState = {
  posts: [],
  comments: [],
};

export const postsReducer = <T>(state = initialState, action: Action<T>) => {
  switch (action.type) {
    case SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case SET_COMMENTS: {
      return {
        ...state,
        posts: action.payload,
        comments: action.payload,
      };
    }

    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }

    case UPDATE_POST: {
      const { id }: any = action.payload;
      const updatedPosts = state.posts.map(post => {
        if (id === post.id) {
          return action.payload;
        }

        return post;
      });

      return {
        ...state,
        posts: updatedPosts,
      };
    }

    case UPDATE_COMMENTS: {
      const { postId }: any = action.payload;
      const lastComment = state.comments.length - 1;
      const { id } = state.comments[lastComment];
      const updatedPosts = state.posts.map(post => {
        const { comments }: any = post;

        if (postId === post.id) {
          return {
            ...post,
            comments: [...comments, {
              id: id + 1,
              ...action.payload,
            }],
          };
        }

        return post;
      });

      return {
        ...state,
        posts: updatedPosts,
      };
    }

    case REMOVE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== +action.payload),
      };
    }

    default:
      return state;
  }
};
