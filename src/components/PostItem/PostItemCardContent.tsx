import React from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
  title: string;
  body: string;
}

export const PostItemCardContent = (props: Props) => {
  return (
    <>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.body}
      </Card.Text>
    </>
  );
};
