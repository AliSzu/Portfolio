import TextField from '@mui/material/TextField';
import { fieldToTextField, TextFieldProps } from 'formik-mui';
import React, { FC, useState } from "react";
import classes from './ContactTextField.module.scss'

const ContactTextField = (props: TextFieldProps) => {
    const { form: { setFieldValue }, field: { name }, rows, label } = props;

    const multilineBoolean = Number(rows) > 1 ? true : false
    return (
        <div className={classes.test}><TextField
        {...fieldToTextField(props)}
        fullWidth
        label= {label}
        multiline={multilineBoolean}
        rows={rows}
        InputProps={{ sx: { borderRadius: "20px" } }}
      />
      </div>
    )

}

export default ContactTextField