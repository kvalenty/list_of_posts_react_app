import { Dispatch } from 'redux';
import { loadedPosts } from '../../redux/actions';

const POSTS_URL = 'https://bloggy-api.herokuapp.com/posts';

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');

const requestOptions: RequestInit = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

export const loadPosts = async (dispatch: Dispatch) => {
  await fetch(POSTS_URL, requestOptions)
    .then(response => response.json())
    .then(result => {
      dispatch(loadedPosts(result));
    });
};

export const loadData = async <T>(url: string): Promise<T[]> => {
  const responsed = await fetch(url).then((response) => response.json());

  return responsed;
};
