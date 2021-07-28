import Router from 'next/router';
import React, { FC, useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import GroupContainer from '../containers/GroupContainer';

const Group: FC = () => {
  // const [user, setUser] = useState<string>('');
  // const [groups, setGroups] = useState<string[]>([]);
  const [user, setUser] = useState<string>('rabbit21');
  const [groups, setGroups] = useState<string[]>([
    'codesmith',
    'genshin buddies',
    'the bois',
    'aram team',
  ]);

  // useEffect(() => {
  //   console.log('user inside useEffect', user);
  //   const options = {
  //     method: 'GET',
  //     headers: { 'content-type': 'application/json' },
  //   };
  //   fetch('http://localhost:4000/api/groups/' + user, options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!data.user) {
  //         Router.push('/');
  //         return;
  //       }
  //       setUser(data.user);
  //       setGroups(data.groups);
  //     })
  //     .catch((e) => {
  //       console.log('Error when fetching groups', e);
  //       Router.push('/error');
  //     });
  // }, []);
  return (
    <>
      {user && (
        <>
          <NavBar username={user} />
          <GroupContainer groups={groups} />
        </>
      )}
    </>
  );
};

export default Group;
