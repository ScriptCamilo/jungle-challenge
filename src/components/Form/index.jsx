import React, { useState } from 'react';
import { RiCheckLine, RiErrorWarningLine } from 'react-icons/ri';

import { postForm } from '../../services/jungleApi';
import { isEmailValid } from '../../utils/validations';

import Button from '../Button';
import Loading from '../Loading';

import styles from './styles.module.css';

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  
  const [inputName, setInputName] = useState('');
  const [isNameError, setIsNameError] = useState(false);

  const [inputEmail, setInputEmail] = useState('');
  const [isEmailError, setIsEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState('');

  const [formStatus, setFormStatus] = useState({
    sent: false,
    ok: false,
  });


  const handleChange = ({target: { value, name }}) => {
    if (name === 'name') {
      setIsNameError(false);

      if (inputName === '' && value === ' ') {
        return setInputName('');
      }
      return setInputName(value);
    }

    // PREVENT THE USER TO TYPE SPACES
    const emailValue = value.split(' ').join('');

    setInputEmail(emailValue);
    setIsEmailError(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inputName === '') return setIsNameError(true);
    if (inputEmail === '') {
      setEmailErrorMsg('Your email is required');
      return setIsEmailError(true);
    }

    
    if (!isEmailValid(inputEmail)) {
      setInputEmail('');
      setEmailErrorMsg('Your email must be valid');
      return setIsEmailError(true);
    }

    setIsLoading(true);

    try {
      await postForm({ name: inputName, email: inputEmail });
      setIsLoading(false);
      setFormStatus({ sent: true, ok: true });

    } catch (error) {
      setIsLoading(false);
      setFormStatus({ sent: true, ok: false })
      console.error(error);
    }

    setInputName('');
    setInputEmail('');
  }

  const handleFeedback = () => {
    setTimeout(() => {
      setFormStatus({sent: false, ok: false})
    }, 5000)

    if (formStatus.ok) {
      return (
        <p className={ styles.ok }>
          <RiCheckLine size="1.5rem" /> &nbsp;
          <span>We received with success!</span>
        </p>
      );
    }

    return (
      <p className={ styles.error }> 
        <RiErrorWarningLine size="1.5rem" /> &nbsp;
        <span>Something went wrong, please try again! </span>
      </p>
    )
  }

  return (
    <form className={ styles.form } onSubmit={ handleSubmit }>
      <label htmlFor="name" className={ styles.label }>
        <input 
          type="text"
          id="name"
          value={ inputName }
          name="name"
          onChange={ handleChange }
          placeholder="Your name *"
          className={ isNameError ? styles.requiredError : '' }
        />
        {
          !isNameError ? '' : (
            <span className={ styles.required }>
              Your name is required
            </span>
          )
        }
      </label>

      <label htmlFor="email" className={ styles.label }>
        <input 
          type="text"
          id="email"
          value={ inputEmail }
          name="email"
          onChange={ handleChange }
          placeholder="Your email *"
          className={ isEmailError ? styles.requiredError : '' }
        />
        {
          !isEmailError ? '' : (
            <span className={ styles.required }>
              {emailErrorMsg}
            </span>
          )
        }
      </label>

      <Button isSubmit className={ styles.button }>
        { isLoading ? <Loading /> : 'Send' }
      </Button>

      {
        !formStatus.sent ? '' : handleFeedback()
      }
    </form>
  );
}

export default Form;
