import React from 'react';

import nanny from '../../assets/images/nanny.svg';

function Nanny() {
  return (
    <section className="container">
      <a href="#nanny">
        <img src={ nanny } alt="Nanny example" />
      </a>
    </section>
  );
}

export default Nanny;
