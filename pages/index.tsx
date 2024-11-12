import { Container, Stack } from '@mui/material';
import { signIn } from 'aws-amplify/auth';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ButtonConponents from './components/button';
import FormTextField from './components/inputField';

const Home = () => {
  return (
    <Container maxWidth="md">
        <h2>Login</h2>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .min(8, 'Password must be at least 8 characters')
              .required('Required'),
          })}
          onSubmit={async (values) => {
            try {
              await signIn({ username: values.email, password: values.password});
              alert('Login successful!');
            } catch (err) {
              console.error(err);
              alert('Login failed. Please check your credentials.');
            }
          }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={2}>
                <FormTextField
                  label="Email"
                  name="email"
                  type="email"
                />
                <FormTextField
                  label="Password"
                  name="password"
                  type="password"
                />
                <ButtonConponents type="submit" label="Login" />
              </Stack>
            </form>
          )}
        </Formik>
    </Container>
  );
};

export default Home;
