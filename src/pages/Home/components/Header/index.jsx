import React from 'react';

import Button from '../../../../components/Button';

import logo from '../../../../assets/images/logo.svg';
import player from '../../../../assets/images/player.svg';

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
        <div className={ styles.title }>
          <h2>
            Easily create or join <br/>
            a local nanny share <br/>
            with Hapu
          </h2>
          <br/>
          <p>
            Hopu is Airbnb for nanny share. Share your
            home, nanny and costs and create new
            flexible, affordable solutions in childcare.
          </p>
        </div>

        <div className={ styles.link }>
          <img src={ player } alt="Player" />
          <a href="#"><span>See hapu in action (27 seconds)</span></a>
        </div>
      </section>


    </header>
  );
}

export default Header;
