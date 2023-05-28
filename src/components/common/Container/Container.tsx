import React, { FC } from "react";
import classes from "./Container.module.scss";
import Header from "../Header/Header";

interface IContainer {
    children: React.ReactNode
}

const Container: FC<IContainer> = ({children}) => {
  return (
      <div className={classes.body}>
        <div className={classes.background}>
            <Header/>
            <div className={classes.container}>{children}</div>
        </div>
      </div>
  );
};

export default Container;
