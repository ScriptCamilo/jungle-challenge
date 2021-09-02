import React, { useState, useEffect } from 'react';

import Button from '../Button';

import styles from './styles.module.css';
import emailValidation from '../../utils/emailValidation';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleChange = ({target: { value }}, setValue) => {
    setValue(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = emailValidation(email);

    if (!isValid) {
      setIsEmailValid(emailValidation((email)));
      return console.log('error');
    }

    return console.log('sucesso');
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

      <Button className={ styles.formButton }>
        Send
      </Button>
    </form>
  );
}

export default Form;
