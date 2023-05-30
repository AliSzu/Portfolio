import React, { FC, forwardRef } from "react";
import classes from "./Contact.module.scss";
import Title from "../common/Title/Title";
import ContactMsg from "../../types/contactmsg";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import ContactTextField from "./ContactTextField/ContactTextField";
import emailjs from 'emailjs-com';

interface IContact {}

// const AboutMe = forwardRef<HTMLDivElement, IAboutMe>((props: IAboutMe, ref)

const Contact = forwardRef<HTMLDivElement, IContact>((props: IContact, ref) => {
  return (
    <div className={`container ${classes["container-card"]}`}>
      <div className={classes.background}>
        <div className={`wrapper ${classes["contact-wrapper"]}`}>
          <div ref={ref}>
            <Title title={"Contact"} />
          </div>
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
                }
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                emailjs.send(`${process.env.REACT_APP_SERVICE}`, `${process.env.REACT_APP_TEMPLATE}`, values, `${process.env.REACT_APP_KEY}`)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                resetForm();
              }}
            >
              {({ submitForm }) => (
                <Form>
                  <Field component={ContactTextField} name="subject" type="subject" label="Subject" rows={1} />
                  <Field component={ContactTextField} name="email" type="email" label="E-mail" rows={1} />
                  <Field component={ContactTextField} name="message" type="message" label="Message" rows={5} />
                  <div className={classes["form-action"]}>
                    <Button
                      onClick={submitForm}
                      style={{
                        borderRadius: 20,
                        backgroundColor: "white",
                        padding: "0.7rem",
                        color: "#6e7381",
                      }}
                      className={classes.submitBtn}>
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;


// const AboutMe = forwardRef<HTMLDivElement, IAboutMe>((props: IAboutMe, ref) => {
//     return (
//       <div className={`container ${classes["container-aboutMe"]}`}>
//         <div className={"wrapper"} ref={ref}>
//             <Title title={'About me'} class={classes['title-aboutMe']}/>
//           <div className={classes.card}>
//               <span className={classes.text}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
//                 egestas velit. Praesent faucibus quam quis ipsum sagittis tempus.
//                 Interdum et malesuada fames ac ante ipsum primis in faucibus.
//                 Morbi rutrum velit vel interdum gravida. Praesent lobortis at orci
//                 luctus malesuada. Aenean metus massa, pretium vitae massa ut,
//                 laoreet bibendum lectus. Vivamus venenatis, eros eget vestibulum
//                 tincidunt, ex orci ultricies ipsum, eget laoreet libero erat in
//                 nisl. Fusce nisl nunc, fermentum nec faucibus eu, ultrices eget
//                 dui. Sed vel elementum quam. Nulla maximus molestie molestie. Sed
//                 sodales, erat in efficitur maximus, lorem nisl eleifend nisi, ut
//                 fermentum ipsum lectus a leo. Vivamus quis mollis enim, sed
//                 accumsan risus. Duis a enim euismod, auctor lacus sed, posuere
//                 sapien. Sed a purus vehicula sem eleifend fringilla. Vestibulum
//                 vitae arcu justoegestas velit. Praesent faucibus quam quis ipsum
//                 sagittis tempus. Interdum et malesuada fames ac ante ipsum primis
//                 in faucibus. Morbi rutrum velit vel interdum gravida.
//               </span>
//               <div className={classes.cat}>
//                 <img src={cat} className={classes["img-cat"]} />
//                 <span className={classes["text-cat"]}>
//                   That's my ray of sunshine - Zumi!
//                 </span>
//               </div>
//             </div>
//           </div>
//       </div>
//     );
//   });
  
//   export default AboutMe;