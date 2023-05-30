import React, { FC } from "react";
import classes from "./ProjectTile.module.scss";
import Project from "../../../types/project";

interface IProjectTile {
  project: Project;
}

const ProjectTile: FC<IProjectTile> = (props: IProjectTile) => {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <img src={props.project.imgBanner} className={classes.bannerImg} />
        <div className={classes.projectTitle}>{props.project.name}</div>
        <div>{props.project.shortDesc}</div>
      </div>
    </div>
  );
};

export default ProjectTile;
