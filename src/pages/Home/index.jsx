import React from 'react';

import Header from '../../components/Header';
import Profile from '../../components/Profile';
import Section from '../../components/Section';
import Form from '../../components/Form';
import CustomLink from '../../components/Link';
import Footer from '../../components/Footer';

import imageSection1 from '../../assets/images/imageSection1.svg';
import imageSection3 from '../../assets/images/imageSection3.svg';
import imageSection5 from '../../assets/images/imageSection5.svg';

import styles from './styles.module.css';

function Home() {
  return (
    <>
      <Header />
      
      <Profile />

      <main>
        <Section>
          <img src={ imageSection1 } alt="Interface example using a notebook" />

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
          </p> <br />

          <CustomLink href="#ready" link="Ready to get started?" />
        </Section>

        <hr />

        <Section>
          <h3 className={ styles.formTitle }>
            Are you a parent without a 
            nanny and looking to share?
          </h3>

          <p>
            Leave us your name and email and we’ll 
            update you as soon as a share becomes 
            available in your area!
          </p>

          <Form />
        </Section>

        <hr />

        <Section>
          <img src={ imageSection3 } alt="How to choose your price amount" />

          <h3 className={ styles.paymentShareTitle }>
            Shared payments
            made simple
          </h3>

          <p>
            Sometimes it’s hard enough just sharing a 
            restaurant bill. Try sharing that bill week in,
            week out and you might encounter more 
            than a few snares. But not with Hapu. 
            Simply set your rates and our automated 
            payment system takes care of the rest. You 
            need never talk money or who owes what.
          </p> <br />

          <CustomLink 
            href="#payment-share"
            link="Read how Bridget's share (without Hapu) ended over $15"
          />
        </Section>

        <hr />

        <Section>
          <h3 className={ styles.framework }>
            A framework built for 
            the long term
          </h3>

          <p>
            Childcare is for the long term. And you 
            need a framework you can count on that 
            gives your share long term viability and 
            success. That’s why we’ve defined Hapu 
            around our three tribal principles; clearly 
            defined process, transparency over money 
            and equality of participation.
          </p> <br />

          <CustomLink 
            href="#framework"
            link="Read how Hapu's tribal background defines our app"
          />
        </Section>

        <hr />

        <Section>
          <img
            src={ imageSection5 } 
            alt="A simple svg representation of notes"
          />

          <h3 className={ styles.comingSoon }>
            Coming soon: Nanny Share 
            Daily Diary!
          </h3>

          <p>
            With the Hapu daily diary your nanny will 
            be able to update you and your sharers 
            with photos and commentary of the day. 
            You and sharers will receive notifications 
            and you’ll be able to login to view the daily 
            adventures fo your little ones. We can’t wait!
          </p>
        </Section>
      </main>

      <Footer />
    </>
  )
}

export default Home;
