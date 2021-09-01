import React from 'react';

import styles from './styles.module.css';

function Section({ children }) {
  return (
    <section className={ `container ${styles.mainSection}` }>
      { children }
    </section>
  );
};

export default Section;
