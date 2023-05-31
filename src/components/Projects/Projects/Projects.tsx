import React, { FC, forwardRef } from "react";
import classes from "./Projects.module.scss";
import Title from "../../common/Title/Title";
import ProjectsList from "../ProjectsList/ProjectsList";
import GlassCard from "../../common/GlassCard/GlassCard";

interface IProjects {}

const Projects = forwardRef<HTMLDivElement, IProjects>(
  (props: IProjects, ref) => {
    return (
      <div className={`container ${classes["container-projects"]}`} ref={ref}>
        <div className={"wrapper"}>
          <Title title={"Projects"} />
          <GlassCard>
            <ProjectsList />
          </GlassCard>
        </div>
      </div>
    );
  }
);

export default Projects;
