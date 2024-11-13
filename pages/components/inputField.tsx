import TextField from '@mui/material/TextField';
import { useFormikContext, FormikValues } from 'formik';
import React from 'react';

interface FormTextFieldProps {
  label: string;
  name: string;
  type?: string;
}

const FormTextField: React.FC<FormTextFieldProps> = ({ label, name, type = 'text' }) => {
  const { values, handleChange, handleBlur, touched, errors } = useFormikContext<FormikValues>();

  // errors[name]が文字列であることをチェック
  const errorText = touched[name] && typeof errors[name] === 'string' ? errors[name] : undefined;

  return (
    <TextField
      label={label}
      variant="outlined"
      name={name}
      fullWidth
      type={type}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      error={touched[name] && Boolean(errors[name])}
      helperText={errorText}
      style={{ marginTop: 36 }}
    />
  );
};

export default FormTextField;
