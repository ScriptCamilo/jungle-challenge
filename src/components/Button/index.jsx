import React from 'react';

import styles from './styles.module.css';

function Button({ children, isButton, className }) {
  return (
    <button 
      type={ isButton ? "button" : "submit" } 
      className={ `${styles.button} ${className}` }
    >
      { children }
    </button>
  );
}

export default Button;
