import React, { FC } from 'react';

interface CreateCardWrapperProps {
  context: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateCardWrapper: FC<CreateCardWrapperProps> = ({
  context,
  open,
  setOpen,
  children,
}) => {
  const handleClick = () => {
    if (open === false) setOpen(true);
  };

  return (
    <div className="create-card-container" id={context} onClick={handleClick}>
      {open ? children : <div className="card-content">Create {context}</div>}
    </div>
  );
};

export default CreateCardWrapper;
