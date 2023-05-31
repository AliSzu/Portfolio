import React, { FC } from "react";
import classes from "./Icon.module.scss";
import ZumiIcon from "../../assets/images/zumi.png";
import { Button } from "@mui/material";

interface IIcon {
    image: string,
    onClick: () => void,
}

const Icon: FC<IIcon> = (props: IIcon) => {

  return (
            <Button sx={{backgroundColor: 'white', padding: '1rem', borderRadius: '20px'}} className={classes['icon--container']} onClick={props.onClick}><img src={props.image} className={classes.icon}/></Button>
  );
};

export default Icon;
