import React from 'react';

import CustomLink from '../CustomLink';

import profileImage from '../../assets/images/profileImage.svg';
import styles from './styles.module.css';

function Profile() {
  return (
    <section className={ styles.profileContainer } >
      <CustomLink 
        href="/profile"
        link="Sarah's day care available now in North Sydney"
        className={ styles.link }
      >
        <img src={ profileImage } alt="Profile example" />
      </CustomLink>

      <h5>Wednesday, Thursday, Friday - 7:30 - 5:30</h5>
    </section>
  );
}

export default Profile;
