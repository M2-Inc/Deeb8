import React, { FC, MouseEvent } from 'react';
import Card from '../components/Card';
import Router from 'next/router';

// export const getInitialProps = async ({ user }) => {
//   console.log('user inside getInitialProps', user);
//   const options = {
//     method: 'GET',
//     headers: { 'content-type': 'application/json' },
//   };
//   await fetch('http://localhost:4000/api/groups/' + user, options)
//     .then((res) => res.json())
//     .then((data) => {
//       return {
//         props: {
//           groups: data.groups,
//         },
//       };
//     })
//     .catch((e) => console.log('Error when fetching groups', e));
// };

interface GroupContainerProps {
  groups: string[];
}

const GroupContainer: FC<GroupContainerProps> = ({ groups }) => {
  const handleClickGroup = (e: MouseEvent<HTMLDivElement>) => {
    const group = e.currentTarget.id.replace(' ', '-').toLowerCase();
    console.log('group clicked', group);
    Router.push(`/${group}/topics`);
  };

  const groupsList = groups.map((group) => (
    <Card key={group} name={group} handleClick={handleClickGroup} />
  ));

  return <div className="group-container">{groupsList}</div>;
};

export default GroupContainer;
