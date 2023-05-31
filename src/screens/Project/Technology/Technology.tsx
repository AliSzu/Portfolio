import React, { FC } from "react";
import classes from "./Technology.module.scss";

interface ITechnology {
  technology: string
}
const Technology: FC<ITechnology> = (props: ITechnology) => {
  return (
    <div className={classes.technology}>
      {props.technology}
    </div>
  );
};

export default Technology;
