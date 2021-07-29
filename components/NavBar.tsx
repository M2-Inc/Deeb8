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
          <Link href="/groups">
            <a className="nav-link">Groups</a>
          </Link>
          <Link href="/friends">
            <a className="nav-link">Friends</a>
          </Link>
        </div>
        <div className="nav-right">
          {/* <div className="nav-img"> */}
          <img
            src={'https://i.imgur.com/1fdbZSj.png'}
            alt="usericon"
            className="user-icon"
          />
          {/* </div> */}
          <div className="nav-username">{username}</div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
