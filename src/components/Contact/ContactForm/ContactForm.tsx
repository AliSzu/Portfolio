import React, { FC } from "react";
import classes from "./ContactForm.module.scss";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";
import ContactTextField from "./ContactTextField/ContactTextField";
import ContactMsg from "../../../types/contactmsg";

const ContactForm: FC<{}> = () => {
  return (
    <div className={classes["form-control"]}>
      <Formik
        initialValues={{
          subject: "",
          email: "",
          message: "",
        }}
        validate={(values) => {
          const errors: Partial<ContactMsg> = {};
          if (!values.subject) {
            errors.subject = "Required";
          }
          if (!values.message) {
            errors.message = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              `${process.env.REACT_APP_SERVICE}`,
              `${process.env.REACT_APP_TEMPLATE}`,
              values,
              `${process.env.REACT_APP_KEY}`
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          resetForm();
        }}
      >
        {({ submitForm }) => (
          <Form>
            <Field
              component={ContactTextField}
              name="subject"
              type="subject"
              label="Subject"
              rows={1}
            />
            <Field
              component={ContactTextField}
              name="email"
              type="email"
              label="E-mail"
              rows={1}
            />
            <Field
              component={ContactTextField}
              name="message"
              type="message"
              label="Message"
              rows={5}
            />
            <div className={classes["form-action"]}>
              <Button
                onClick={submitForm}
                style={{
                  borderRadius: 20,
                  backgroundColor: "white",
                  padding: "0.7rem",
                  color: "#6e7381",
                }}
                className={classes.submitBtn}
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
