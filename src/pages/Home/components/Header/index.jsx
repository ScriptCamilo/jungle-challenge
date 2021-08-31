import React from 'react';

import Button from '../../../../components/Button';

import logo from '../../../../assets/images/logo.svg';
import styles from './styles.module.css';

function Header() {
  return (
    <header className={ `container ${styles.containerImage}` }>
      <section className={ styles.header }>
        <img src={ logo } alt="Logo" className={ styles.logo } />
        <div className={ styles.buttonContainer }>
          <Button>
            Become a Nanny Share Host
          </Button>
        </div>
      </section>

      <section className={ styles.main }>
        <h2>
          Easily create or join
          a local nanny share
          with Hapu
        </h2>
      </section>

    </header>
  );
}

export default Header;
