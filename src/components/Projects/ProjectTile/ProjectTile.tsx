import React, { FC, useState } from "react";
import classes from "./ProjectTile.module.scss";
import ProjectObj from "../../../types/project";

interface IProjectTile {
  project: ProjectObj;
}

const ProjectTile: FC<IProjectTile> = (props: IProjectTile) => {
  const [images, setImages] = useState<string[]>(props.project.imgBanner)
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <img src={images[0]} className={classes.bannerImg} />
        <div className={classes.projectTitle}>{props.project.name}</div>
        <div>{props.project.shortDesc}</div>
      </div>
    </div>
  );
};

export default ProjectTile;
