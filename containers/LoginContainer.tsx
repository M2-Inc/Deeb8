import React, { FC, useRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';

const LoginContainer: FC = () => {
  const inputUsername = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  console.log('reference to inputUsername', inputUsername.current);

  const handleLogin = () => {
    if (inputUsername.current && inputPassword.current) {
      console.log('reference to input element ', inputUsername.current);
      const user = inputUsername.current.value;
      const password = inputPassword.current.value;
      if (user.length === 0 || password.length === 0) {
        alert('Cannot leave username/password fields empty');
        return;
      }
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ user, password }),
      };
      fetch('http//localhost:4000/api/login', options)
        .then(() => {
          console.log('Logged in');
          Router.push('/groups');
        })
        .catch((e) => console.log('login error', e));
    }
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        <div className="login-username">
          <h2>Username</h2>
          <input type="text" ref={inputUsername} placeholder="Username" />
        </div>
        <div className="login-password">
          <h2>Password</h2>
          <input type="password" ref={inputPassword} placeholder="Password" />
        </div>
        <div className="login-submit">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="login-signup">
          <Link href="/signup">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
