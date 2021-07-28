import React, { FC } from 'react';
import Link from 'next/link';

interface NavBarProps {
  username: string;
}

const NavBar: FC<NavBarProps> = ({ username }) => {
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-left">
          <Link href="/groups">Groups</Link>
          <Link href="/friends">Friends</Link>
        </div>
        <div className="nav-right">{username}</div>
      </nav>
    </div>
  );
};

export default NavBar;
