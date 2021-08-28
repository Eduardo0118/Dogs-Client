import React from 'react';
import styles from './UserHeaderNav.module.css';

import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from 'Context/UserContext';
import useMedia from 'Hooks/useMedia';

import { ReactComponent as MyPhotoIcon } from 'Assets/feed.svg';
import { ReactComponent as MyStatisticsIcon } from 'Assets/estatisticas.svg';
import { ReactComponent as AddPhotoIcon } from 'Assets/adicionar.svg';
import { ReactComponent as LogoutIcon } from 'Assets/sair.svg';

const UserStats = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const { pathname } = useLocation();

  const renderOnMobile = (label) => {
    if (mobile) return label;
  };

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end activeClassName={styles.active}>
          <MyPhotoIcon /> {renderOnMobile('Minhas fotos')}
        </NavLink>
        <NavLink to="/account/statistics" activeClassName={styles.active}>
          <MyStatisticsIcon />
          {renderOnMobile('Estatísticas')}
        </NavLink>
        <NavLink to="/account/post" activeClassName={styles.active}>
          <AddPhotoIcon />
          {renderOnMobile('Adicionar foto')}
        </NavLink>
        <button onClick={userLogout}>
          <LogoutIcon />
          {renderOnMobile('Sair')}
        </button>
      </nav>
    </>
  );
};

export default UserStats;
