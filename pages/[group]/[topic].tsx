import React, { FC, useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';
import ThreadContainer from '../../containers/ThreadContainer';

interface Thread {
  id: number;
  title: string;
  author: string;
  created_at: string;
  comments: number;
}

const ThreadPage: FC = () => {
  const router = useRouter();
  const { group, topic } = router.query;
  const [user, setUser] = useState('hello');
  const [threads, setThreads] = useState<Thread[]>([
    {
      id: 1,
      title: 'WHat is the purpose of Tinder',
      author: 'jeffrey',
      created_at: '7/15/2021',
      comments: 0,
    },
    {
      id: 2,
      title: 'Fastest way to get a 6 pack??',
      author: 'Andy',
      created_at: '7/13/2021',
      comments: 0,
    },
    {
      id: 3,
      title: 'WHat is thender',
      author: 'jeff',
      created_at: '7/16/2021',
      comments: 0,
    },
  ]);

  // useEffect(() => {
  //   if (!topic) return;
  //   fetch(`http://localhost:4000/api/getThreads/${topic}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!data.user || !data.threads) {
  //         Router.push('/');
  //         return;
  //       }
  //       setThreads(data.threads);
  //       setUser(data.user);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       Router.push('/');
  //     });
  // }, [threads]);

  return (
    <>
      {user ? (
        <>
          <NavBar username={user} />
          <ThreadContainer group={group} topic={topic} threads={threads} />
        </>
      ) : (
        <h1>Loading page</h1>
      )}
    </>
  );
};

export default ThreadPage;
