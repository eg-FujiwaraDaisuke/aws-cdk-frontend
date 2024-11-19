import { Button, Container, FormControl, TextField } from '@mui/material';
import { signIn } from 'aws-amplify/auth';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const LoginPage: React.FC = () => {
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
                sx={{ margin: '8px 0 0 0' }}
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
                sx={{ margin: '8px 0 0 0' }}
              />
            </FormControl>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Login
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
