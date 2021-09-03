import React from 'react';

import CustomLink from '../Link';

import profileImage from '../../assets/images/profileImage.svg';
import styles from './styles.module.css';

function Profile() {
  return (
    <section className={ styles.profileContainer } >
      <CustomLink 
        href="#nanny"
        link="Sarah's day care available now in North Sydney"
        className={ styles.link }
      >
        <img src={ profileImage } alt="Nanny example" />
      </CustomLink>

      <h5>Wednesday, Thursday, Friday - 7:30 - 5:30</h5>
    </section>
  );
}

export default Profile;
