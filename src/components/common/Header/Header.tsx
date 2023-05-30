import React, { FC, RefObject } from "react";
import classes from "./Header.module.scss";

interface IHeader {
  aboutMeRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Header: FC<IHeader> = (props: IHeader) => {
  
  const onClickScroll = (event: React.MouseEvent<HTMLElement>,ref: RefObject<HTMLDivElement>) => {
    event.preventDefault();
    ref.current!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={classes.header}>
      <div className={classes.actions}>
        <span className={classes.text}>HOME </span>
        <span className={classes.divider} />
        <span className={classes.text}  onClick={(event) => onClickScroll(event, props.aboutMeRef)}>ABOUT ME</span>
        <span className={classes.divider} />
        <span className={classes.text}  onClick={(event) => onClickScroll(event, props.projectsRef)}>PROJECTS </span>
        <span className={classes.divider} />
        <span className={classes.text} onClick={(event) => onClickScroll(event, props.contactRef)}>CONTACT </span>
      </div>
    </div>
    // <MenuBurger/>
  );
};

export default Header;
