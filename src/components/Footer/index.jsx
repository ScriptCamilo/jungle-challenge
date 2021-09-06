import React from 'react';

import Button from '../Button';
import CustomLink from '../CustomLink';

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

      <Button className={ styles.button }>
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

      <div className={ styles.links }>
        <a href="/"><img src={ hapuLogo } alt="Logo Hapu" /></a>

        <nav className={ styles.nav }>
          <a href="share-your-nanny">Share Your Nanny</a>
          <a href="our-story">Our Story</a>
          <a href="blog">Blog</a>
          <a href="terms-privacy">Terms &amp; Privacy</a>
        </nav>

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
      </div>

      <hr />

      <p className={ styles.copyright }>
        <small>Copyright &copy; 2017 Hapu PTY Limited All rights reserved</small>
      </p>
    </footer>
  );
}

export default Footer;
