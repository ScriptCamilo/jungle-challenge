import React from 'react';

import Button from '../Button';
import CustomLink from '../Link';

import calendarIcon from '../../assets/icons/calendar.svg';
import hapuLogo from '../../assets/icons/logo.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import instagram from '../../assets/icons/instagram.svg';
import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={ styles.footerContainer } >
      <div className={ styles.footerHeader }>
        <h3>
          Become a nanny share host
        </h3>

        <p>
          Takes less than 5 minutes to get started
        </p>
      </div>

      <Button isButton className={ styles.button }>
        <img src={ calendarIcon } alt="Calendar icon" />
        <div>
          <p>Create Your Nanny Share</p>
          <p><small>Takes less than 5 minutes</small></p>
        </div>
      </Button>

      <CustomLink 
        href="browse-nanny"
        link="Or browse local nanny-shares"
      />

      <img src={ hapuLogo } alt="Logo Hapu" />

      <section className={ styles.links }>
        <a href="share-your-nanny"><h5>Share Your Nanny</h5></a>
        <a href="our-story"><h5>Our Story</h5></a>
        <a href="blog"><h5>Blog</h5></a>
        <a href="terms-privacy"><h5>Terms &amp; Privacy</h5></a>
      </section>

      <section className={ styles.socialMedia }>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <img src={ facebook } alt="Facebook icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <img src={ twitter } alt="Twitter icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <img src={ instagram } alt="Instagram icon" />
        </a>
      </section>

      <hr />

      <p className={ styles.copyright }>
        <small>Copyright &copy; 2017 Hapu PTY Limited All rights reserved</small>
      </p>
    </footer>
  );
}

export default Footer;
