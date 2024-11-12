import TextField from '@mui/material/TextField';
import { FieldHookConfig, useField } from 'formik';
import React from 'react';

interface InputFieldProps extends FieldHookConfig<string> {
    label: string;
    name: string;
    type?: string;
}

const InputField = ({ label, name, type = 'text', ...props }: InputFieldProps) => {
    const [field, meta] = useField(props);

    return (
        <TextField
            {...field}
            {...props}
            label={label}
            type={type}
            variant="outlined"
            fullWidth
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
        />
    );
};

export default InputField;
