import React, { FC } from "react";
import classes from "./Home.module.scss";
import Container from "../common/Container/Container";
import eclipse from "../../assets/images/ec.png";
import Header from "../common/Header/Header";



const Home: FC<{}> = () => {
  return (
    <Container>
      <div className={classes.home}>
        <div className={classes.text}>
          <h1 className={`${classes.title} ${classes['title--main']}`}>HI, I'M ALICJA</h1>
          <h2 className={`${classes.title} ${classes['title--sub']}`}>A FRONTEND DEVELOPER</h2>
        </div>
        <img src={eclipse} className={classes.imgEclipse} />
      </div>
    </Container>
  );
};

export default Home;
