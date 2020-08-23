import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Post, RootState } from '../../interfaces/interfaces';
import { removePost } from '../api/api';
import { deletePost } from '../../redux/actions';
import EditPost from '../EditPost/EditPost';
import { PostItemCardContent } from './PostItemCardContent';
import { CommentsList } from './CommentsList';

const mapStateToProps = (state: RootState) => state;

const connector = connect(mapStateToProps);

type Props = {
  post: Post;
};

const PostItem = (props: Props) => {
  const { post } = props;
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [isVisibleComments, setIsVisibleComments] = useState(false);
  const quantityComments = post.comments?.length;

  const removePostHandle = () => {
    const confirm = window.confirm('Are you sure?');

    if (confirm) {
      removePost(post.id);
      dispatch(deletePost(post.id));
    }
  };

  const editPostHandle = () => setIsEdit(!isEdit);
  const toggleCommentsHandle = () => setIsVisibleComments(!isVisibleComments);

  return (
    <Card className="text-center m-3">
      <Card.Body>
        {isEdit && <EditPost post={post} editPostHandle={editPostHandle} />}
        {!isEdit && <PostItemCardContent title={post.title} body={post.body} />}
        {isVisibleComments && <CommentsList comments={post.comments} />}
        <Button variant="danger" onClick={() => removePostHandle()}>Delete</Button>
        <Button variant="warning" onClick={editPostHandle} disabled={isEdit}>Edit</Button>
        <Button variant="info" onClick={toggleCommentsHandle} disabled={!quantityComments}>Comments</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        {`Comments: ${quantityComments}`}
      </Card.Footer>
    </Card>
  );
};

export default connector(PostItem);
