import React, { forwardRef } from "react";
import classes from "./Contact.module.scss";
import Title from "../common/Title/Title";
import GlassCard from "../common/GlassCard/GlassCard";
import ContactForm from "./ContactForm/ContactForm";
import emailIcon from "../../assets/images/emailIcon.png"
import linkedinIcon from "../../assets/images/linkedinIcon.png"

interface IContact {}

const Contact = forwardRef<HTMLDivElement, IContact>((props: IContact, ref) => {
  return (
    <div className={`container ${classes["container-projects"]}`} ref={ref}>
      <div className={"wrapper"}>
        <Title title={"Contacts"} />
        <div
          className={classes["form-wrapper"]}
        >
          <GlassCard>
            <ContactForm />
          </GlassCard>
          <div className={classes['link-wrapper']}>
            <div className={classes['contact-link']}><img src={emailIcon} className={classes.icon}/><span>alicjaszulecka0@gmail.com</span></div>
            <div className={classes['contact-link']}><img src={linkedinIcon} className={classes.icon}/><span>https://www.linkedin.com/in/alicja-szulecka/</span></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
