import { Dispatch } from 'redux';
import { setPreparedPosts, setComments } from '../../redux/actions';
import { Comment, Post } from '../../interfaces/interfaces';
import { POSTS_URL, COMMENTS_URL } from '../../constants';

const myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');

const loadOptions = (): RequestInit => ({
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
});

const uploadOptions = (raw: string): RequestInit => ({
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
});

const removeOptions = (): RequestInit => ({
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow',
});

const loadData = async <T>(url: string, options: RequestInit): Promise<T[]> => {
  const responsed = await fetch(url, options);

  return responsed.json();
};

const preparedPosts = (posts: Post[], comments: Comment[]) => {
  const preparedList = posts.map(post => ({
    ...post,
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return preparedList;
};

export const loadPosts = async (dispatch: Dispatch) => {
  const posts = await loadData<Post>(POSTS_URL, loadOptions());
  const comments = await loadData<Comment>(COMMENTS_URL, loadOptions());

  const preparedList = preparedPosts(posts, comments);

  dispatch(setComments(comments));
  dispatch(setPreparedPosts(preparedList));
};

export const uploadPost = async (title: string, body: string) => {
  const raw = JSON.stringify({ title, body });

  fetch(POSTS_URL, uploadOptions(raw))
    .then(response => response.text())
    // eslint-disable-next-line no-console
    .catch(error => console.error(error));
};

export const uploadComment = async (postId: number, body: string) => {
  const raw = JSON.stringify({ postId, body });

  fetch(COMMENTS_URL, uploadOptions(raw))
    .then(response => response.text())
    // eslint-disable-next-line no-console
    .catch(error => console.error(error));
};

export const removePost = async (id: number) => {
  fetch(`${POSTS_URL}/${id}`, removeOptions())
    .then(response => response.text())
    // eslint-disable-next-line no-console
    .catch(error => console.error(error));
};
