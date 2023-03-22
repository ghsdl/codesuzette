import { useState, useRef } from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import { Formik, Form } from 'formik';
import TextInput from '../TextInput/TextInput';
import TextareaInput from '../TextareaInput/TextareaInput';
import Button from '../Button/Button';
import { getInitialValues, validate, sendEmail } from './FormUtils.js';
import 'react-toastify/dist/ReactToastify.css';
import Reaptcha from 'reaptcha';
import './Form.scss';

interface MyFormProps {
  className?: string;
}

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const MyForm = ({ className }: MyFormProps) => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<Reaptcha>(null);

  const verify = () => {
    captchaRef?.current?.getResponse().then((res) => {
      setCaptchaToken(res);
    });
  };

  return (
    <div className={`myForm ${className}`}>
      <Formik
        initialValues={getInitialValues()}
        validate={(initialValues) => validate(initialValues)}
        onSubmit={(values: FormValues, { setSubmitting, resetForm }) => {
          sendEmail(setSubmitting, resetForm);
        }}
      >
        {({ isSubmitting }) => (
          <Form id="myForm">
            <TextInput
              id="name"
              label="Nom *"
              placeholder="crepounettedu56"
              name="name"
              type="text"
              required={true}
            />
            <TextInput
              id="email"
              label="Email *"
              placeholder="jaimelescrepes@suzette.com"
              name="email"
              type="email"
              required={true}
            />
            <TextareaInput
              id="message"
              label="Message *"
              placeholder="la chandeleur a toujours lieu 40 jours après noël"
              name="message"
              rows={10}
              cols={50}
              required={true}
            />
            <div className="myForm__buttons">
              <Reaptcha
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}
                onVerify={verify}
              />
              <Button
                type="submit"
                disabled={isSubmitting || !captchaToken}
                className="myForm__button"
              >
                Envoyer
              </Button>
              <ToastContainer transition={Zoom} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
