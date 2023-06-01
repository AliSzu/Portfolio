import React, { FC, forwardRef } from "react";
import classes from "./Projects.module.scss";
import Title from "../../common/Title/Title";
import ProjectsList from "../ProjectsList/ProjectsList";
import GlassCard from "../../common/GlassCard/GlassCard";
import useElementOnScreen from "../../../hooks/useOnScreen";

interface IProjects {}

const Projects = forwardRef<HTMLDivElement, IProjects>(
  (props: IProjects, ref) => {
    const [containerRef, isVisible] = useElementOnScreen({
      root: null,
      rootMargin: "100px",
      threshold: 0.0,
    });
    const [containerRefCard, isVisibleCard] = useElementOnScreen({
      root: null,
      rootMargin: "100px",
      threshold: 0.0,
    });

    return (
      <div className={`container ${classes["container-projects"]}`} ref={ref}>
        <div className={"wrapper"}>
          <div ref={containerRef} className={`${isVisible && "fade_in"}`}>
            <Title title={"Projects"} />
          </div>
          <div
            ref={containerRefCard}
            className={`${isVisibleCard && "fade_in"}`}
          >
            <GlassCard>
              <ProjectsList />
            </GlassCard>
          </div>
        </div>
      </div>
    );
  }
);

export default Projects;
