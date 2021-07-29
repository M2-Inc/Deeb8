import React, { FC } from 'react';
import CreateTopic from '../components/CreateTopic';

interface CreateTopicContainerProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTopics: React.Dispatch<React.SetStateAction<string[]>>;
}

const CreateTopicContainer: FC<CreateTopicContainerProps> = ({
  setOpen,
  setTopics,
}) => {
  return (
    <div className="create-topic-container">
      <CreateTopic setOpen={setOpen} setTopics={setTopics} />
    </div>
  );
};

export default CreateTopicContainer;
