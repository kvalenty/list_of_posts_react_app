import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Comment } from '../../interfaces/interfaces';

interface Props {
  comments: Comment[] | undefined;
}

export const CommentsList = (props: Props) => {
  const { comments } = props;

  return (
    <ListGroup className="flush m-2">
      {comments?.map(comment => (
        <ListGroupItem key={comment.id}>
          {comment.body}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
