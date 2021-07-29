import React, { FC } from 'react';
import CreateGroup from '../components/CreateGroup';

interface CreateGroupContainerProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setGroups: React.Dispatch<React.SetStateAction<string[]>>;
}

const CreateGroupContainer: FC<CreateGroupContainerProps> = ({
  setGroups,
  setOpen,
}) => {
  return (
    <div className="create-group-container">
      <h3>Create Group</h3>
      <CreateGroup setOpen={setOpen} setGroups={setGroups} />
    </div>
  );
};

export default CreateGroupContainer;
