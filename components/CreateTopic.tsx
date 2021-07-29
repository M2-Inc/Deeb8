import React, { FC, useRef } from 'react';

interface CreateTopicProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTopics: React.Dispatch<React.SetStateAction<string[]>>;
}

const CreateTopic: FC<CreateTopicProps> = ({ setOpen, setTopics }) => {
  const inputName = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputName.current !== null) {
      const name: string = inputName.current.value;
      if (name.length === 0) {
        alert('Cannot leave Topic name field empty');
        return;
      }
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ name }),
      };
      fetch('http://localhost:4000/api/createTopic', options)
        .then((res) => res.json())
        .then((data) => {
          setTopics(data.Topics);
          setOpen(false);
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <div className="create-Topic">
      <div className="">
        <h3>Create Topic</h3>
        <input ref={inputName} type="text" placeholder="Topic Name"></input>
      </div>
      <button onClick={handleClick}>Create</button>
    </div>
  );
};

export default CreateTopic;
