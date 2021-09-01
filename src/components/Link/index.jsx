import React from 'react';

import styles from './styles.module.css';

function CustomLink({ children, href, link, className }) {
  return (
    <a href={ href } className={ `${styles.customLink} ${className}` }>
        { children }
      <p>
        <span>
          { link }
        </span>
      </p>
    </a>
  )
}

export default CustomLink;
