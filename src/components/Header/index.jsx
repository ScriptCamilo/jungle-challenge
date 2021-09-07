import React from 'react';
import { useExperiment, emitter } from '@marvelapp/react-ab-test';

import Button from '../Button';
import CustomLink from '../CustomLink';

import imageHeader from '../../assets/images/imageHeader.svg';
import logo from '../../assets/icons/headerLogo.svg';
import player from '../../assets/icons/player.svg';
import styles from './styles.module.css';


// Defining registration of experiments
emitter.defineVariants("Jungle Example", ["original", "variant"]);

function Header() {
  const { selectVariant } = useExperiment("Jungle Example");

  const abTest = selectVariant({
    original: (
      <>
        <h2>
          Easily create or join
          a local nanny share
          with Hapu
        </h2>
        <br/>
        <p>
          Hapu is Airbnb for nanny share. Share your
          home, nanny and costs and create new
          flexible, affordable solutions in childcare.
        </p>
      </>
    ),
    variant: (
      <>
        <h2>
          Create the childcare 
          you need at a price 
          you can afford
        </h2>
        <br/>
        <p>
          Connect with other local families to share
          a nanny from as low as $10.00/hr each. Create
          your family profile today to get started.
        </p>
      </>
    )
  });

  return (
    <header className={ styles.headerContainer }>
      <section className={ styles.header }>
        <a href="/"><img src={ logo } alt="Logo" className={ styles.logo } /></a>

        <nav className={ styles.links }>
          <a href="share-your-nanny"><h5>Create Your Nanny Share</h5></a>
          <a href="blog"><h5>Broswer Shares</h5></a>
          <a href="our-story"><h5>Our Story</h5></a>
        </nav>

        <Button className={ styles.button }>
          Become a Nanny Share Host
        </Button>

        <a href="login" className={ styles.signin }>Sign In</a>
      </section>

      <section className={ styles.hero }>
        <div>
          <div className={ styles.title }>
            { abTest }
          </div>

          <CustomLink 
            href="player"
            link="See hapu in action (27 seconds)"
            className={ styles.player }
          >
            <img src={ player } alt="Player" className={ styles.image } />
          </CustomLink>
        </div>

        <img 
          src={ imageHeader }
          alt="Simulating a connection"
          className={ styles.imageHeader }
        />
      </section>
    </header>
  );
}

export default Header;
