import React from 'react';

import styles from './styles.module.css';

function Section({ children }) {
  return (
    <section className={ styles.mainSection }>
      { children }
    </section>
  );
};

export default Section;
