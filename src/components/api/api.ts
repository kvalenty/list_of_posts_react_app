import { Dispatch } from 'redux';
import { loadedPosts } from '../../redux/actions';
import { Comment, Post } from '../../interfaces/interfaces';
import { POSTS_URL, COMMENTS_URL } from '../../constants';

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');

const requestOptions: RequestInit = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

const loadData = async <T>(url: string, options: RequestInit): Promise<T[]> => {
  const responsed = await fetch(url, options).then((response) => response.json());

  return responsed;
};

const preparedPosts = (posts: Post[], comments: Comment[]) => {
  const preparedList = posts.map(post => ({
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return preparedList;
};

export const loadPosts = async (dispatch: Dispatch) => {
  const posts = await loadData<Post>(POSTS_URL, requestOptions);
  const comments = await loadData<Comment>(COMMENTS_URL, requestOptions);

  const preparedList = preparedPosts(posts, comments);

  dispatch(loadedPosts(preparedList));
};
