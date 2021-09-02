import React from 'react';

import Button from '../Button';
import CustomLink from '../Link';

import calendarIcon from '../../assets/icons/calendar.svg';
import hapuLogo from '../../assets/icons/logo.svg';
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
        href="#browse-nanny"
        link="Or browse local nanny-shares"
      />

      <img src={ hapuLogo } alt="Logo Hapu" />

      <section>
        <a href="#share-your-nanny">Share Your Nanny</a>
        <a href="#our-story">Our Story</a>
        <a href="#blog">Blog</a>
        <a href="#terms-privacy">Terms &amp; Privacy</a>
      </section>

      <section>
        <img src="" alt="Facebook icon" />
        <img src="" alt="Twitter icon" />
        <img src="" alt="Instagram icon" />
      </section>

      <hr />

      <p className={ styles.copyright }>
        <small>Copyright &copy; 2017 Hapu PTY Limited All rights reserved</small>
      </p>
    </footer>
  );
}

export default Footer;
