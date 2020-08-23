import { Action, Post } from '../interfaces/interfaces';
import { LOAD_POSTS, REMOVE_POST } from './actionTypes';

interface InitialState {
  posts: Post[];
}

const initialState: InitialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case 'ADD_POST': {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }

    case REMOVE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
