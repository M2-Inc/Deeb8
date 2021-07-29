import React, { FC, MouseEvent, useState } from 'react';
import Card from '../components/Card';
import Router from 'next/router';
import CreateCardWrapper from '../components/CreateCardWrapper';
import CreateGroupContainer from '../containers/CreateGroupContainer';

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
  setGroups: React.Dispatch<React.SetStateAction<string[]>>;
}

const GroupContainer: FC<GroupContainerProps> = ({ groups, setGroups }) => {
  const [isCreatingGroup, setIsCreatingGroup] = useState<boolean>(false);

  const handleClickGroup = (e: MouseEvent<HTMLDivElement>) => {
    const group = e.currentTarget.id.replace(' ', '-').toLowerCase();
    console.log('group clicked', group);
    Router.push(`/${group}/topics`);
  };

  const groupsList = groups.map((group) => (
    <Card key={group} name={group} handleClick={handleClickGroup} />
  ));

  return (
    <div className="group-container">
      <CreateCardWrapper
        context="group"
        open={isCreatingGroup}
        setOpen={setIsCreatingGroup}
      >
        <CreateGroupContainer
          setOpen={setIsCreatingGroup}
          setGroups={setGroups}
        />
      </CreateCardWrapper>
      {groupsList}
    </div>
  );
};

export default GroupContainer;
