import React from 'react';

import styles from './styles.module.css';

function CustomLink({ children, href, link, className }) {
  return (
    <a href={ href } className={ `${styles.customLink} ${className}` }>
        { children }
      <span>
        <span>
          { link }
        </span>
      </span>
    </a>
  )
}

export default CustomLink;
