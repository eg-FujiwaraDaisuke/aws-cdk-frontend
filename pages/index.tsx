import { Box, Container, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import { signIn } from 'aws-amplify/auth';
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ButtonConponents from './components/button';

const Home = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        await signIn({ username: values.email, password: values.password});
        alert('Login successful!');
      } catch (err) {
        console.error(err);
        alert('Login failed. Please check your credentials.');
      }
    },
  });

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#444',
          marginTop: 5,
          width: '100%'
        }}
      >
        <h2>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2} width="100%">
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <ButtonConponents type="submit" label="Login" />
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Home;
