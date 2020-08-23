import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { connect, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Post, RootState } from '../../interfaces/interfaces';
import { removePost } from '../api/api';
import { deletePost } from '../../redux/actions';
import EditPost from '../EditPost/EditPost';

const mapStateToProps = (state: RootState) => state;

const connector = connect(mapStateToProps);

type Props = {
  post: Post;
};

const PostItem = (props: Props) => {
  const { post } = props;
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);

  const removePostHandle = () => {
    const confirm = window.confirm('Are you sure?');

    if (confirm) {
      removePost(post.id);
      dispatch(deletePost(post.id));
    }
  };

  const editPostHandle = () => setIsEdit(!isEdit);

  return (
    <Card className="text-center m-3">
      <Card.Body>
        {isEdit && <EditPost post={post} editPostHandle={editPostHandle} />}
        {!isEdit && (
          <>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              {post.body}
            </Card.Text>
          </>
        )}
        <Button variant="danger" onClick={() => removePostHandle()}>Delete</Button>
        <Button variant="warning" onClick={editPostHandle} disabled={isEdit}>Edit</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{`Comments: ${post.comments?.length}`}</Card.Footer>
    </Card>
  );
};

export default connector(PostItem);
