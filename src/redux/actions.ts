import { Action, Post } from '../interfaces/interfaces';
import {
  LOAD_POSTS,
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
} from './actionTypes';

export const loadedPosts = (payload: Post[]): Action => {
  return {
    type: LOAD_POSTS,
    payload,
  };
};

export const deletePost = (payload: number): Action => {
  return {
    type: REMOVE_POST,
    payload,
  };
};

export const addPost = (payload: Post): Action => {
  return {
    type: ADD_POST,
    payload,
  };
};

export const updatePost = (payload: Post): Action => {
  return {
    type: UPDATE_POST,
    payload,
  };
};
