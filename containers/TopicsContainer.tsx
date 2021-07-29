import React, { FC, MouseEvent } from 'react';
import Card from '../components/Card';
import Router from 'next/router';

interface TopicsContainerProps {
  group: string | string[];
  topics: string[];
}

const TopicsContainer: FC<TopicsContainerProps> = ({ group, topics }) => {
  const handleClickTopic = (e: MouseEvent<HTMLDivElement>) => {
    const topic = e.currentTarget.id.replace(' ', '-').toLowerCase();
    console.log('topic clicked', topic);
    Router.push(`/${group}/${topic}`);
  };

  const topicsList = topics.map((topic) => (
    <Card key={topic} name={topic} handleClick={handleClickTopic} />
  ));

  return <div className="topics-container">{topicsList}</div>;
};

export default TopicsContainer;
