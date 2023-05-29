import React, { FC, forwardRef } from "react";
import classes from "./AboutMe.module.scss";
import sparkles from "../../assets/images/sparkle.png";
import cat from "../../assets/images/zumi.png";
import Title from "../common/Title/Title";

interface IAboutMe {}

const AboutMe = forwardRef<HTMLDivElement, IAboutMe>((props: IAboutMe, ref) => {
  return (
    <div className={`container ${classes["container-aboutMe"]}`}>
      <div className={"wrapper"} ref={ref}>
          <Title title={'About me'} class={classes['title-aboutMe']}/>
        <div className={classes.card}>
            <span className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
              egestas velit. Praesent faucibus quam quis ipsum sagittis tempus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Morbi rutrum velit vel interdum gravida. Praesent lobortis at orci
              luctus malesuada. Aenean metus massa, pretium vitae massa ut,
              laoreet bibendum lectus. Vivamus venenatis, eros eget vestibulum
              tincidunt, ex orci ultricies ipsum, eget laoreet libero erat in
              nisl. Fusce nisl nunc, fermentum nec faucibus eu, ultrices eget
              dui. Sed vel elementum quam. Nulla maximus molestie molestie. Sed
              sodales, erat in efficitur maximus, lorem nisl eleifend nisi, ut
              fermentum ipsum lectus a leo. Vivamus quis mollis enim, sed
              accumsan risus. Duis a enim euismod, auctor lacus sed, posuere
              sapien. Sed a purus vehicula sem eleifend fringilla. Vestibulum
              vitae arcu justoegestas velit. Praesent faucibus quam quis ipsum
              sagittis tempus. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Morbi rutrum velit vel interdum gravida.
            </span>
            <div className={classes.cat}>
              <img src={cat} className={classes["img-cat"]} />
              <span className={classes["text-cat"]}>
                That's my ray of sunshine - Zumi!
              </span>
            </div>
          </div>
        </div>
    </div>
  );
});

export default AboutMe;

  
