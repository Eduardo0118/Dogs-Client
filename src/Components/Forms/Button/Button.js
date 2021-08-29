import React from 'react';

import styles from './Button.module.css';

const Button = ({ children, loading, ...props }) => {
  return (
    <button {...props} disabled={loading} className={styles.button}>
      {loading ? 'Carregando...' : children}
    </button>
  );
};

export default Button;
