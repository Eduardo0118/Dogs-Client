import React from 'react';
import { Route, Routes } from 'react-router';
import LoginCreate from './LoginCreate';
import LoginForgot from './LoginForgot';
import LoginForm from './LoginForm';
import LoginRecovery from './LoginRecovery';

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="forgot-pass" element={<LoginForgot />} />
        <Route path="recovery-pass" element={<LoginRecovery />} />
      </Routes>
    </>
  );
};

export default Login;
