import React from 'react';

import styles from './styles.module.css';

function Button({ children, isSubmit, className, onClick }) {
  return (
    <button 
      type={ isSubmit ? "submit" : "button" } 
      className={ `${styles.button} ${className}` }
      onClick={ onClick }
    >
      { children }
    </button>
  );
}

export default Button;
