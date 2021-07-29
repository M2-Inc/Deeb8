import React, { FC, useEffect, useState, MouseEvent } from 'react';
import NavBar from '../../components/NavBar';
import Router, { useRouter } from 'next/router';
import TopicsContainer from '../../containers/TopicsContainer';

const topicsPage: FC = () => {
  const router = useRouter();
  const { group } = router.query;
  console.log('extracted group from router.query ', group);
  const [user, setUser] = useState('hello');
  const [topics, setTopics] = useState<string[]>([
    'Jobs',
    'Careers',
    'Events',
    'News',
    'Resources',
    'Sites',
    'Videos',
    'React',
    'React Native',
    'GraphQL',
    'Node',
    'JavaScript',
    'React Native',
    'React',
  ]);

  // useEffect(() => {
  //   if (!group) return;
  //   fetch(`http://localhost:4000/api/getTopics/${group}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!data.user || !data.topics) {
  //         Router.push('/');
  //         return;
  //       }
  //       setTopics(data.topics);
  //       setUser(data.user);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       Router.push('/');
  //     });
  // }, [group]);

  return (
    <>
      {user ? (
        <>
          <NavBar username={user} />
          <TopicsContainer topics={topics} group={group} />
        </>
      ) : (
        <h1>Loading page</h1>
      )}
    </>
  );
};

export default topicsPage;
