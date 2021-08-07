import React from 'react';
import styles from './Button.module.css';

function Button (text) {
    return <Button className={styles.button}>{text}</Button>;
  }

export default Button;