import Button from '@mui/material/Button';
import { ButtonProps } from '@mui/material/Button';
import React from 'react';

interface ButtonComponentsProps extends ButtonProps {
  label: string;
  onClick?: () => void;
}

export const ButtonComponents: React.FC<ButtonComponentsProps> = ({ label, ...props }) => {
  return (
    <Button variant="contained" color="primary" fullWidth {...props}>
      {label}
    </Button>
  );
};
