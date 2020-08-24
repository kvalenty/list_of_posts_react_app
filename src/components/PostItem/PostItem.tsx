import React, { useState, ChangeEvent } from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Post, RootState } from '../../interfaces/interfaces';
import { removePost, uploadComment } from '../api/api';
import { deletePost, updateComments } from '../../redux/actions';
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
  const [isNewComment, setIsNewComment] = useState(false);
  const [newComment, setNewComment] = useState('');
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
  const toggleNewCommentHandle = () => setIsNewComment(!isNewComment);
  const onChangeCommentHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const updateCommentsHandle = () => {
    if (newComment.trim()) {
      uploadComment(post.id, newComment);
      dispatch(updateComments(post.id, newComment));
      setIsNewComment(!isNewComment);
      setNewComment('');
    }
  };

  return (
    <Card className="text-center m-3">
      <Card.Body>
        {isEdit && <EditPost post={post} editPostHandle={editPostHandle} />}
        {!isEdit && <PostItemCardContent title={post.title} body={post.body} />}
        {isVisibleComments && <CommentsList comments={post.comments} />}

        {isNewComment && (
          <Form className="p-4">
            <Form.Row className="align-items-end">
              <Col>
                <Form.Label>Add new comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter new comment"
                  value={newComment}
                  onChange={onChangeCommentHandle}
                />
              </Col>
              <Col>
                <Button variant="secondary" onClick={updateCommentsHandle}>
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        )}
        <Button variant="danger" onClick={removePostHandle}>Delete</Button>
        <Button variant="warning" onClick={editPostHandle} disabled={isEdit}>Edit post</Button>
        <Button variant="info" onClick={toggleCommentsHandle} disabled={!quantityComments}>
          {isVisibleComments ? 'Hide comments' : 'Show comments'}
        </Button>
        <Button variant="primary" onClick={toggleNewCommentHandle}>Add comment</Button>
      </Card.Body>
      <Card.Footer className="text-muted">
        {`Comments: ${quantityComments}`}
      </Card.Footer>
    </Card>
  );
};

export default connector(PostItem);
