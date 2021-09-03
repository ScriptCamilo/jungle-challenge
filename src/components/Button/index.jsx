import React from 'react';

import styles from './styles.module.css';

function Button({ children, isButton, className, onClick }) {
  return (
    <button 
      type={ isButton ? "button" : "submit" } 
      className={ `${styles.button} ${className}` }
      onClick={ onClick }
    >
      { children }
    </button>
  );
}

export default Button;
