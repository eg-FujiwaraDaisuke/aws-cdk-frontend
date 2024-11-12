import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';
import React from 'react';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const ButtonConponents: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Button variant="contained" color="primary" fullWidth {...props}>
      {label}
    </Button>
  );
};

export default ButtonConponents;
