import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./ProjectSlider.module.scss";

interface IProjectSlider {
  images: string[];
}
const ProjectSlider: FC<IProjectSlider> = (props: IProjectSlider) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
         centerMode: false
        },
      },
    ],
  };

  const slides =
    props.images &&
    props.images.map((item, index) => (
      <div  key={index}>
        <img src={item} className={classes.image} />
      </div>
    ));
  return (
    <div>
      <Slider {...settings} className={classes["slick__list"]}>
        {slides}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
