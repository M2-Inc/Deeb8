import React, { FC, useRef } from 'react';

interface CreatePostProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPosts: React.Dispatch<React.SetStateAction<string[]>>;
}

const CreatePost: FC<CreatePostProps> = ({ setOpen, setPosts }) => {
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputContent = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    if (inputTitle.current !== null && inputContent.current !== null) {
      const title: string = inputTitle.current.value;
      const content: string = inputContent.current.value;
      console.log('text area content: ', content);
      if (title.length === 0 || content.length === 0) {
        alert('Cannot leave Topic name/ field empty');
        return;
      }
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ title, content }),
      };
      fetch('http://localhost:4000/api/createTopic', options)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data.posts);
          setOpen(false);
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <div className="create-Topic">
      <div className="post-create-title">
        <h3>Post Title</h3>
        <input ref={inputTitle} type="text" placeholder="Post Title"></input>
      </div>
      <div className="post-create-body">
        <h3>Post Content</h3>
        <textarea rows={4} cols={50} ref={inputContent} />
      </div>
      <div className="post-create-button-container">
        <button onClick={handleClick} className="post-create-button">
          Create Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
