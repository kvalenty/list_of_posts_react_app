import React, { SyntheticEvent, useState, ChangeEvent } from 'react';
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { RootState, Posts } from '../../interfaces/interfaces';
import { uploadPost } from '../api/api';
import { addPost } from '../../redux/actions';

const mapStateToProps = (state: RootState) => state;

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector> & {
  dispatch: Dispatch;
  posts: Posts;
};

const PostsList = (props: Props) => {
  const dispatch = useDispatch();
  const { posts: { posts } } = props;
  let lastId = 0;

  if (posts.length > 0) {
    lastId = posts[posts.length - 1].id;
  }

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const titleOnChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTitle(value);
  };

  const textOnChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setBody(value);
  };

  const addPostHandle = (event: SyntheticEvent) => {
    event.preventDefault();

    if (title.trim() && body.trim()) {
      uploadPost(title, body);
      dispatch(addPost({
        id: lastId + 1,
        title,
        body,
        comments: [],
      }));
      setTitle('');
      setBody('');
    }
  };

  return (
    <>
      <Form className="p-4" onSubmit={addPostHandle}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter new title"
            value={title}
            onChange={titleOnChangeHandle}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Text of post</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your post"
            value={body}
            onChange={textOnChangeHandle}
          />
        </Form.Group>
        <Button variant="success" type="submit" block>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default connector(PostsList);
