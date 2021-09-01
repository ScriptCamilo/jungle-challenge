import React from 'react';

import nanny from '../../assets/images/nanny.svg';
import styles from './styles.module.css';

function Nanny() {
  return (
    <section className={ `container ${styles.nannyContainer}`} >
      <a href="#nanny" className={ styles.link }>
        <img src={ nanny } alt="Nanny example" />
        <p>
          <span>
            Sarah's day care available
            now in North Sydney
          </span>
        </p>
      </a>

      <h5>Wednesday, Thursday, Friday - 7:30 - 5:30</h5>
    </section>
  );
}

export default Nanny;
