import React, { useState } from 'react'
import './App.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// import { checkEnable } from './helpers'

function App() {
  const [enable, setenable] = useState(false)

  const checkEnable = (errors: any) => {
    console.log(errors, 'errors')
    if (JSON.stringify(errors) === '{}') {
      console.log('START')
      setenable(false)
    } else if (errors.email === '' && errors.password === '') {
      console.log('No Error')
      setenable(true)
    } else {
      console.log('Error is there')
      setenable(false)
      return true
    }
    return false
  }

  return (
    <div className='App'>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = { email: '', password: '' }
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }

          if (!values.password) {
            errors.password = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.password)
          ) {
            errors.password = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting, values, errors }) => (
          <Form>
            <h1>{JSON.stringify(values)}</h1>
            <h1>{JSON.stringify(errors)}</h1>
            <Field type='text' name='email' />
            <ErrorMessage name='email' component='div' />
            <br />
            <Field type='text' name='password' />
            <ErrorMessage name='password' component='div' />

            {enable ? 'Show' : 'Hide❌'}
            <button type='submit' disabled={checkEnable(errors)}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default App
