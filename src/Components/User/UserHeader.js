import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css';

import UserHeaderNav from './UserHeaderNav';
import { headerTitle } from 'Helper/UserHelper';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const { pathname } = useLocation();

  React.useEffect(() => {
    setTitle(headerTitle(pathname));
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
