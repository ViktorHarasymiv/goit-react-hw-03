import React , { useId } from 'react'

import { Formik, Form , Field , ErrorMessage } from 'formik';
import * as Yup from "yup";


import style from './style.module.css';

  const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").max(12, "Too Long!").required("Поле обов'язкове!"),
  phone: Yup.number()
  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(8)
  .max(12)
  .required("Поле обов'язкове!"),
  });

  const initialValues = {
    id: '',
    username: "",
    phone: ""
  };

function ContactForm({ onAdd }) {

  const nameFieldId = useId();
  const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        onAdd({
            id: Date.now(),
            name: values.username,
            number: values.phone
          }); 
        actions.resetForm();
      } 

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema} >
        <Form className={style.form}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field id={nameFieldId} type="text" name="username"></Field>
            <ErrorMessage name="username" component="span" />

            <label htmlFor={numberFieldId}>Telephone number</label>
            <Field id={numberFieldId} type="tel" name="phone" min='8' required></Field>
             <ErrorMessage name="phone" component="span" className='span'/>

            <button type='submit'>ADD CONTACT</button>
        </Form>
    </Formik>
  )
}

export default ContactForm