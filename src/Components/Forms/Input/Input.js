import React from 'react';

import styles from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} id={name} name={name} type={type} />
      <p className={styles.error}>Erro</p>
    </div>
  );
};

export default Input;
