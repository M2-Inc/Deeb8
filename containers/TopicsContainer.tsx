import React, { FC, MouseEvent, useState } from 'react';
import Card from '../components/Card';
import Router from 'next/router';
import CreateCardWrapper from '../components/CreateCardWrapper';
import CreateTopicContainer from '../containers/CreateTopicContainer';

interface TopicsContainerProps {
  group: string | string[];
  topics: string[];
  setTopics: React.Dispatch<React.SetStateAction<string[]>>;
}

const TopicsContainer: FC<TopicsContainerProps> = ({
  group,
  topics,
  setTopics,
}) => {
  const [isCreatingTopic, setIsCreatingTopic] = useState<boolean>(false);

  const handleClickTopic = (e: MouseEvent<HTMLDivElement>) => {
    const topic = e.currentTarget.id.replace(' ', '-').toLowerCase();
    console.log('topic clicked', topic);
    Router.push(`/${group}/${topic}`);
  };

  const topicsList = topics.map((topic, setTopics) => (
    <Card key={topic} name={topic} handleClick={handleClickTopic} />
  ));

  return (
    <div className="topics-container">
      <CreateCardWrapper
        context="group"
        open={isCreatingTopic}
        setOpen={setIsCreatingTopic}
      >
        <CreateTopicContainer
          setOpen={setIsCreatingTopic}
          setTopics={setTopics}
        />
      </CreateCardWrapper>
      {topicsList}
    </div>
  );
};

export default TopicsContainer;
