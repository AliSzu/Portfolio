import React, { FC, forwardRef } from "react";
import classes from "./Projects.module.scss";
import Title from "../../common/Title/Title";
import ProjectsList from "../ProjectsList/ProjectsList";

interface IProjects {}

const Projects = forwardRef<HTMLDivElement, IProjects>(
  (props: IProjects, ref) => {
    return (
      <div className={`container ${classes["container-projects"]}`} ref={ref}>
        <div className={"wrapper"}>
          <Title title={"Projects"} />
          <div className={classes.card}>
            <ProjectsList />
          </div>
        </div>
      </div>
    );
  }
);

export default Projects;
