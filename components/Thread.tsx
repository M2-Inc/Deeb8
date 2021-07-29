import React, { FC, MouseEvent } from 'react';

interface ThreadProps {
  thread: {
    id: number;
    title: string;
    author: string;
    created_at: string;
    comments: number;
  };
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
}

const Thread: FC<ThreadProps> = ({
  thread: { id, author, title, created_at, comments },
  handleClick,
}) => {
  return (
    <div id={id.toString()} className="thread" onClick={handleClick}>
      <div className="thread-top">
        <h2 className="thread-title">{title}</h2>
        <h4 className="thread-date">{created_at}</h4>
      </div>
      <div className="thread-bottom">
        <h4 className="thread-author">Posted by {author}</h4>
        <h4 className="thread-date">Comments: {comments}</h4>
      </div>
    </div>
  );
};

export default Thread;
