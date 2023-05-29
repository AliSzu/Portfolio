import React, { FC } from "react";
import classes from "./Title.module.scss"
import sparkles from "../../../assets/images/sparkle.png";

interface ITitle {
    title: string,
    class?: string
}

const Title: FC<ITitle> = (props: ITitle) => {
  return (
    <>
      <span className={`title ${props.class}`}>{props.title}</span>
      <img src={sparkles} className={classes["img-sparkles"]} />
    </>
  );
};

export default Title;


