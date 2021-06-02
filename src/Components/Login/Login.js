import { UserContext } from 'Context/UserContext';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import LoginCreate from './LoginCreate';
import LoginForgot from './LoginForgot';
import LoginForm from './LoginForm';
import LoginRecovery from './LoginRecovery';
import styles from './Login.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="forgot-pass" element={<LoginForgot />} />
          <Route path="recovery-pass" element={<LoginRecovery />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
