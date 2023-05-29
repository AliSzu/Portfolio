import React, { FC } from "react";
import classes from "./ProjectsList.module.scss";
import ProjectTile from "../ProjectTile/ProjectTile";

const ProjectsList: FC<{}> = () => {
  return (
    <div className={classes.list}>
      <ul>
        <li><ProjectTile/></li>
        <li><ProjectTile/></li>
        <li><ProjectTile/></li>
      </ul>
    </div>
  );
};

export default ProjectsList;
