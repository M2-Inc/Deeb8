import React, { FC, useRef } from 'react';
import Link from 'next/link';
import Router from 'next/router';

const SignupContainer: FC = () => {
  const inputUsername = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  const handleSignup = () => {
    if (inputUsername.current && inputPassword.current) {
      const username: string = inputUsername.current.value;
      const password: string = inputPassword.current.value;
      if (!username || !password) {
        alert('Cannot leave username/password fields empty');
        return;
      }

      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ username, password }),
      };
      fetch('http://localhost:4000/api/signup', options)
        .then(() => {
          console.log('Sign up successful');
          Router.push('/groups');
        })
        .catch((e) => {
          console.log('Sign up error', e);
        });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-panel">
        <div className="login-username">
          <h2>Username</h2>
          <input ref={inputUsername} type="text" placeholder="Username" />
        </div>
        <div className="login-password">
          <h2>Password</h2>
          <input ref={inputPassword} type="password" placeholder="Password" />
        </div>
        <div className="signup-submit">
          <button onClick={handleSignup}>Create Account</button>
        </div>
        <div className="have-login">
          <Link href="/">
            <button>Already have account?</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupContainer;
