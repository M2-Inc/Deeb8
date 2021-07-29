import React, { FC, useState } from 'react';
import LoginContainer from '../containers/LoginContainer';
import styles from '../styles/index.module.css';

const Login: FC = () => {
  return (
    <div className="login">
      <LoginContainer />
    </div>
  );
};

export default Login;
