import React, { FC, forwardRef, useState, useEffect } from "react";
import classes from "./AboutMe.module.scss";
import ZumiIcon from "../../assets/images/zumi.png";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Title from "../common/Title/Title";
import githubIcon from "../../assets/images/githubicon.png";
import resumeIcon from "../../assets/images/resumeicon.png";
import catIcon from "../../assets/images/caticon.png";
import { Button } from "@mui/material";
import Cat from "../../types/cat";
import { db } from "../../firebase";

interface IAboutMe {}

const AboutMe = forwardRef<HTMLDivElement, IAboutMe>((props: IAboutMe, ref) => {
  const [cat, setCat] = useState<Cat[]>();
  const [catImg, setCatImg] = useState<Cat>()

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "portfolio", "cat");
      const docSnap = await getDoc(docRef);
      const catArray = docSnap.data()?.cat
      setCat(catArray)
      setCatImg(catArray[0])
    };
    fetchData().catch(console.error);
  }, []);

  const handleCatClick = () => {
    const index = cat?.indexOf(catImg!);
    if (index! >= 0 && index! < cat?.length! - 1) {
     setCatImg(cat![index! + 1])
    }
    if (index! === cat?.length! - 1) {
      setCatImg(cat![0])
    }
  }

  return (
    <div className={`container ${classes["container-aboutMe"]}`}>
      <div className={"wrapper"} ref={ref}>
        <Title title={"About me"} class={classes["title-aboutMe"]} />
        <div className={classes.card}>
          <div>
          <span className={classes.text}>
            I'm Alicja a dedicated <b>third-year Computer Science student</b> with a strong focus on becoming a Frontend developer!
            I am also an active member of the <b>programming
            scientific club, BYTE_IT</b> where I continuously challenge myself and enhance my skills. 
            With a solid foundation in Computer Science, I aim to create engaging and user-friendly web as well as desktop applications.<br/>
          </span>
          Useful links
          <div className={classes['aboutme-actions']}>
            <Button sx={{backgroundColor: 'white', padding: '1rem', borderRadius: '20px'}} className={classes['icon-container']}><img src={githubIcon} className={classes.icon}/></Button>
            <Button sx={{backgroundColor: 'white', padding: '1rem', borderRadius: '20px'}} className={classes['icon-container']} onClick={handleCatClick}><img src={catIcon} className={classes.icon}/></Button>
          </div>
          </div>
          <div className={classes.cat}>
            <img src={catImg ? catImg.imgSrc : ZumiIcon} className={classes["img-cat"]} />
            <span className={classes["text-cat"]}>
              That's my little ray of sunshine - Zumi!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
