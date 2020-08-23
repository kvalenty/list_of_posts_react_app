import { Action } from '../interfaces/interfaces';
import { LOAD_POSTS } from './actionTypes';

export const loadedPosts = (payload: any | any[]): Action => {
  return {
    type: LOAD_POSTS,
    payload,
  };
};
