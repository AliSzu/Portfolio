import React, { FC, useRef } from "react";
import classes from "./Container.module.scss";
import Header from "../Header/Header";

interface IContainer {
    children: React.ReactNode
}

const Container: FC<IContainer> = (props: IContainer) => {
  return (
      <div className={`container ${classes['container-card']}`}>
        <div className={classes.background}>
            <div className={classes.wrapper}>{props.children}</div>
        </div>
      </div>
  );
};

export default Container;
