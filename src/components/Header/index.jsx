import React from 'react';

import Button from '../Button';
import CustomLink from '../CustomLink';

import imageHeader from '../../assets/images/imageHeader.svg';
import logo from '../../assets/icons/headerLogo.svg';
import player from '../../assets/icons/player.svg';
import styles from './styles.module.css';

function Header() {
  return (
    <header className={ styles.headerContainer }>
      <section className={ styles.header }>
        <img src={ logo } alt="Logo" className={ styles.logo } />
        <Button isButton className={ styles.button }>
          Become a Nanny Share Host
        </Button>
      </section>

      <section className={ styles.hero }>
        <div className={ styles.title }>
          <h2>
            Easily create or join <br/>
            a local nanny share <br/>
            with Hapu
          </h2>
          <br/>
          <p>
            Hapu is Airbnb for nanny share. Share your
            home, nanny and costs and create new
            flexible, affordable solutions in childcare.
          </p>
        </div>

        <CustomLink 
          href="#player"
          link="See hapu in action (27 seconds)"
          className={ styles.link }
        >
          <img src={ player } alt="Player" className={ styles.image } />
        </CustomLink>
      </section>
    </header>
  );
}

export default Header;
