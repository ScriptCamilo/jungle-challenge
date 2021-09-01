import React from 'react';

import CustomLink from '../Link';

import nanny from '../../assets/images/nanny.svg';
import styles from './styles.module.css';

function Nanny() {
  return (
    <section className={ `container ${styles.nannyContainer}`} >
      <CustomLink 
        href="#nanny"
        link="Sarah's day care available now in North Sydney"
        className={ styles.link }
      >
        <img src={ nanny } alt="Nanny example" />
      </CustomLink>

      <h5>Wednesday, Thursday, Friday - 7:30 - 5:30</h5>
    </section>
  );
}

export default Nanny;
