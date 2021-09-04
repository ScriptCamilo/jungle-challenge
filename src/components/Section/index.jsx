import React from 'react';

import styles from './styles.module.css';

function Section({ children, className }) {
  return (
    <section className={ `${styles.mainSection} ${className}` }>
      { children }
    </section>
  );
};

export default Section;
