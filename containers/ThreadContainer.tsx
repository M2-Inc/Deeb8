import React, { FC, MouseEvent } from 'react';
import Thread from '../components/Thread';
import Router from 'next/router';

interface Thread {
  id: number;
  title: string;
  author: string;
  created_at: string;
  comments: number;
}

interface ThreadContainerProps {
  threads: Thread[];
  topic: string | string[];
  group: string | string[];
}

const ThreadContainer: FC<ThreadContainerProps> = ({
  topic,
  threads,
  group,
}) => {
  const handleClickThread = (e: MouseEvent<HTMLDivElement>) => {
    const threadID = e.currentTarget.id;
    console.log('Thread clicked', threadID);
    Router.push(`/${group}/${topic}/${threadID}`);
  };

  const threadList = threads.map((thread, index) => (
    <Thread key={thread.id} thread={thread} handleClick={handleClickThread} />
  ));
  return (
    <>
      <h2 className="thread-topic">{topic}</h2>
      <div className="thread-container">
        <div className="thread-list">{threadList}</div>
      </div>
    </>
  );
};

export default ThreadContainer;
