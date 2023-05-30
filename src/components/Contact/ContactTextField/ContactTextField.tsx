import TextField from '@mui/material/TextField';
import { fieldToTextField, TextFieldProps } from 'formik-mui';
import React, { FC, useState } from "react";
import classes from './ContactTextField.module.scss'

const ContactTextField = (props: TextFieldProps) => {
    const { form: { setFieldValue }, field: { name }, rows, label } = props;
    // const { rows } = fieldToTextField(props)
    const onChange = React.useCallback(
        (event: any) => {
          const { value } = event.target;
          setFieldValue(name, value ? value.toUpperCase() : '');
        },
        [setFieldValue, name]
      );
      const multilineBoolean = Number(rows) > 1 ? true : false
    return (
        <div className={classes.test}><TextField
        {...fieldToTextField(props)}
        fullWidth
        label= {label}
        multiline={multilineBoolean}
        rows={rows}
        // onChange={(e) => {
        //   setMessage((prev) => ({ ...prev, [property]: e.target.value }));
        // }}
        InputProps={{ sx: { borderRadius: "20px" } }}
      />
      </div>
    )

}

export default ContactTextField