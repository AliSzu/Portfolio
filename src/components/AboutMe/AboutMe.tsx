import React, { forwardRef, useState, useEffect } from "react";
import classes from "./AboutMe.module.scss";
import ZumiIcon from "../../assets/images/zumi.png";
import { doc, getDoc } from "firebase/firestore";
import Title from "../common/Title/Title";
import githubIcon from "../../assets/images/githubicon.png";
import catIcon from "../../assets/images/caticon.png";
import linkedinIcon from "../../assets/images/linkedinIcon.png";
import Cat from "../../types/cat";
import { db } from "../../firebase";
import Icon from "./Icon/Icon";
import useElementOnScreen from "../../hooks/useOnScreen";

interface IAboutMe {}

const AboutMe = forwardRef<HTMLDivElement, IAboutMe>((props: IAboutMe, ref) => {
  const [cat, setCat] = useState<Cat[]>();
  const [catImg, setCatImg] = useState<Cat>();
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "10px",
    threshold: 0.0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "portfolio", "cat");
      const docSnap = await getDoc(docRef);
      const catArray = docSnap.data()?.cat;
      setCat(catArray);
      setCatImg(catArray[0]);
    };
    fetchData().catch(console.error);
  }, []);

  const handleCatClick = () => {
    const index = cat?.indexOf(catImg!);
    if (index! >= 0 && index! < cat?.length! - 1) {
      setCatImg(cat![index! + 1]);
    }
    if (index! === cat?.length! - 1) {
      setCatImg(cat![0]);
    }
  };

  const handleLinkClick = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={`container ${classes["container-aboutMe"]}`}>
      <div className={"wrapper"} ref={ref}>
        <div ref={containerRef} className={`${isVisible && "fade_in"}`}>
          <Title title={"About me"} class={classes["title-aboutMe"]} />
          <div ref={containerRef} className={classes.card}>
            <div>
              <span className={classes.text}>
                I'm Alicja a dedicated{" "}
                <b>third-year Computer Science student</b> with a strong focus
                on becoming a Frontend developer! I am also an active member of
                the <b>programming scientific club, BYTE_IT</b> where I
                continuously challenge myself and enhance my skills. With a
                solid foundation in Computer Science, I aim to create engaging
                and user-friendly web as well as desktop applications. Oh! and I
                love everything cute!
                <br />
              </span>
              <div className={classes["aboutme-actions"]}>
                <Icon
                  image={githubIcon}
                  onClick={() => handleLinkClick("https://github.com/AliSzu")}
                />
                <Icon
                  image={linkedinIcon}
                  onClick={() =>
                    handleLinkClick(
                      "https://www.linkedin.com/in/alicja-szulecka-579427279/"
                    )
                  }
                />
                <Icon image={catIcon} onClick={handleCatClick} />
              </div>
            </div>
            <div className={classes.cat}>
              <img
                src={catImg ? catImg.imgSrc : ZumiIcon}
                alt={catImg ? catImg.shortDesc : "Zumi"}
                className={classes["img-cat"]}
              />
              <span className={classes["text-cat"]}>
                That's my little ray of sunshine - Zumi!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AboutMe;
