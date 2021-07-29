import React, { FC } from 'react';
import CreatePost from '../components/CreatePost';

interface CreatePostContainerProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPosts: React.Dispatch<React.SetStateAction<string[]>>;
  group: string;
  topic: string;
}

const CreatePostContainer: FC<CreatePostContainerProps> = ({
  setOpen,
  setPosts,
  group,
  topic,
}) => {
  return (
    <div className="create-post-container">
      <h1>
        Create Post for {topic} in {group}
      </h1>
      <CreatePost setOpen={setOpen} setPosts={setPosts} />
    </div>
  );
};

export default CreatePostContainer;
