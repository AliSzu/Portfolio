import React, { FC } from "react";
import classes from "./Header.module.scss";

const Header: FC<{}> = () => {
  return (
    <div className={classes.header}>
      <div className={classes.actions}>
        HOME <span className={classes.divider} />
        ABOUT ME <span className={classes.divider} />
        PROJECTS <span className={classes.divider} />
        CONTACT
      </div>
    </div>
  );
};

export default Header;
