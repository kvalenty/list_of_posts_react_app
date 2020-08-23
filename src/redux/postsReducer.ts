import { Action } from '../interfaces/interfaces';
import { LOAD_POSTS } from './actionTypes';

const initialState = {
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

    default:
      return state;
  }
};
