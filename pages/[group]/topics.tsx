import React, { FC, useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Router, { useRouter } from 'next/router';

const topicsPage: FC = () => {
  const router = useRouter();
  const { group } = router.query;
  const [user, setUser] = useState('');
  const [topics, setTopics] = useState<string[]>([]);

  useEffect(() => {
    if (!group) return;
    fetch(`http://localhost:4000/api/getTopics/${group}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.user) {
          Router.push('/');
          return;
        }
        setUser(data.user);
      })
      .catch();
  }, [group]);

  return (
    <>
      {/* <NavBar user={user} /> */}
      <h1>{group}</h1>
    </>
  );
};

export default topicsPage;
