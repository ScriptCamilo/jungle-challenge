import React, { useState, useEffect } from 'react';

import Button from '../Button';

import styles from './styles.module.css';
import { isEmailValid } from '../../utils/validations';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = ({target: { value }}, setValue) => {
    setValue(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isEmailValid(email)) {
      return console.log('error');
    }

    return console.log('success');
  }

  return (
    <form className={ styles.form }>
      <label htmlFor="name" className={ styles.label }>
        <input 
          type="text"
          id="name"
          value={ name }
          onChange={ (event) => handleChange(event, setName) }
          placeholder="Your name" 
        />
      </label>

      <label htmlFor="email" className={ styles.label }>
        <input 
          type="text"
          id="email"
          value={ email }
          onChange={ (event) => handleChange(event, setEmail) }
          placeholder="Your email"
        />
      </label>

      <Button className={ styles.button } onClick={ handleSubmit }>
        Send
      </Button>
    </form>
  );
}

export default Form;
