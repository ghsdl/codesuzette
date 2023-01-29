/* eslint-disable no-undef */
import Picture from '../Picture/Picture';
import CREPE from '../../assets/images/CREPE.svg';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import set from 'lodash/set';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const getInitialValues = () => {
  return {
    name: '',
    email: '',
    message: ''
  };
};

const validate = (values) => {
  const errors = {};

  if (isEmpty(values.name)) {
    set(errors, 'name', 'Requis');
  }
  if (isEmpty(values.email)) {
    set(errors, 'email', 'Requis');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    set(errors, 'email', 'Adresse email invalide');
  }
  if (isEmpty(values.message)) {
    set(errors, 'message', 'Requis');
  }

  return errors;
};

const sendEmail = async (setSubmitting, resetForm) => {
  try {
    const response = await emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      '#myForm',
      process.env.REACT_APP_PUBLIC_KEY
    );
    if (isEqual(response.status, 200) && isEqual(response.text, 'OK')) {
      setSubmitting(false);
      resetForm();
      toast.success('Bravo, message envoyé!', {
        icon: <Picture src={CREPE} alt="logo" style={{ width: '50px' }} />
      });
    } else {
      setSubmitting(false);
      toast.error('Une erreur est survenue.', {
        position: toast.POSITION.TOP_RIGHT,
        icon: '❗️'
      });
      return { error: 'Une erreur est survenue.' };
    }
  } catch (error) {
    setSubmitting(false);
    toast.error('Une erreur est survenue.', {
      position: toast.POSITION.TOP_RIGHT,
      icon: '❗️'
    });
    throw new Error(error);
  }
};

export { getInitialValues, validate, sendEmail };
