/* eslint-disable no-undef */
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqual';
import set from 'lodash/set';
import emailjs from '@emailjs/browser';

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
  const response = await emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    '#myForm',
    process.env.REACT_APP_PUBLIC_KEY
  );
  try {
    if (isEqual(response.status, 200) && isEqual(response.text, 'OK')) {
      setSubmitting(false);
      resetForm();
    } else {
      return { error: 'Une erreur est survenue.' };
    }
  } catch (error) {
    throw new Error(error);
  }
};

export { getInitialValues, validate, sendEmail };
