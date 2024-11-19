import { Container, FormControl, TextField } from '@mui/material';
import { signIn } from 'aws-amplify/auth';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { ButtonComponents } from './components/button';

export const LoginPage = () => {
  return (
    <Container maxWidth="md">
      <h2>Login</h2>
      <Formik
        initialValues = {{
          email: '',
          password: '',
        }}
        validationSchema = { Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),
        })}
        onSubmit = { async (values) => {
          try {
            await signIn({ username: values.email, password: values.password });
            alert('Login successful!');
          } catch (err) {
            console.error(err);
            alert('Login failed. Please check your credentials.');
          }
        }}
      >
        {({ handleSubmit, values, handleChange, handleBlur, errors, touched }) => (
          <form onSubmit={ handleSubmit }>
            <FormControl fullWidth style={{ marginTop: 36 }}>
              <TextField
                label = "Email"
                name = "email"
                type = "email"
                variant = "outlined"
                value = { values.email }
                onChange = { handleChange }
                onBlur = { handleBlur }
                error = { touched.email && Boolean(errors.email) }
                helperText = { touched.email ? errors.email : undefined }
              />
              <TextField
                label = "Password"
                name = "password"
                type = "password"
                variant = "outlined"
                value = { values.password }
                onChange = { handleChange }
                onBlur = { handleBlur }
                error = { touched.password && Boolean(errors.password) }
                helperText = { touched.password ? errors.password : undefined }
              />
            </FormControl>
            <ButtonComponents type="submit" label="Login" />
          </form>
        )}
      </Formik>
    </Container>
  );
};
