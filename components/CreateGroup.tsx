import React, { FC, useRef } from 'react';

interface CreateGroupProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setGroups: React.Dispatch<React.SetStateAction<string[]>>;
}

const CreateGroup: FC<CreateGroupProps> = ({ setOpen, setGroups }) => {
  const inputName = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputName.current !== null) {
      const name: string = inputName.current.value;
      if (name.length === 0) {
        alert('Cannot leave group name field empty');
        return;
      }
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name }),
      };
      fetch('http://localhost:4000/api/createGroup', options)
        .then((res) => res.json())
        .then((data) => {
          setGroups(data.groups);
          setOpen(false);
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <div className="create-group">
      <div className="">
        <input ref={inputName} type="text" placeholder="Group Name"></input>
      </div>
      <div className="create-group-button-container">
        <button onClick={handleClick}>Create</button>
        <button
          onClick={() => {
            console.log('clck');
            setOpen(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateGroup;
