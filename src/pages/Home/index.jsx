import React from 'react';

import Header from '../../components/Header';
import Nanny from '../../components/Nanny';
import Section from '../../components/Section';
import CustomLink from '../../components/Link';

import notebook from '../../assets/images/notebook.svg';
import styles from './styles.module.css';

function Home() {
  return (
    <>
      <Header />
      <Nanny />

      <main>
        <Section>
          <img src={ notebook } alt="Interface example using notebook" />

          <h3 className={ styles.shareYourHomeTitle}>
            Share your home,
            nanny and costs
          </h3>

          <p>
            You have a fantastic home, a fantastic 
            nanny and wouldn’t cutting your costs in 
            half be, well, fantastic?! If only it was easy 
            to connect with other parents to share 
            your costs? Well now it is, with Hapu.&nbsp;
            <CustomLink href="#tribe" link="Hapu means tribe" />
            &nbsp;and it’s our foundational 3 
            tribal principles that empowers you to 
            create and manage your own tribe. A tribe 
            that together has the power to create new 
            affordable solutions in childcare that work 
            for you and your community.
          </p>
        </Section>
      </main>
    </>
  )
}

export default Home;
