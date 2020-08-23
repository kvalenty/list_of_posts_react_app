import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { connect, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Post, RootState } from '../../interfaces/interfaces';
import { uploadPost } from '../api/api';
import { updatePost } from '../../redux/actions';

const mapStateToProps = (state: RootState) => state;

const connector = connect(mapStateToProps);

type Props = {
  post: Post;
  editPostHandle: () => void;
};

const EditPost = (props: Props) => {
  const dispatch = useDispatch();
  const { post, editPostHandle } = props;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const titleOnChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTitle(value);
  };

  const textOnChangeHandle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setBody(value);
  };

  const updatePostHandle = (event: SyntheticEvent) => {
    event.preventDefault();

    if (title.trim() && body.trim()) {
      uploadPost(title, body);
      dispatch(updatePost({ id: post.id, title, body }));
      setTitle('');
      setBody('');
    }
  };

  return (
    <Form
      className="p-4"
      onSubmit={(event) => {
        updatePostHandle(event);
        editPostHandle();
      }}
    >
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
      <ButtonGroup>
        <Button variant="success" type="submit">
          Submit
        </Button>
        <Button
          onClick={editPostHandle}
          variant="secondary"
          type="submit"
        >
          Cencel
        </Button>
      </ButtonGroup>
    </Form>
  );
};

export default connector(EditPost);
