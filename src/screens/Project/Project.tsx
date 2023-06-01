import React, { FC, useState, useEffect } from "react";
import classes from "./Project.module.scss";
import { Link, useParams } from "react-router-dom";
import Title from "../../components/common/Title/Title";
import { doc, getDoc } from "firebase/firestore";
import ProjectObj from "../../types/project";
import { db } from "../../firebase";
import ProjectSlider from "./ProjectSlider/ProjectSlider";
import Technology from "./Technology/Technology";
import GlassCard from "../../components/common/GlassCard/GlassCard";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Project: FC<{}> = () => {
  const { id } = useParams();

  const [project, setProject] = useState<ProjectObj>({} as ProjectObj);
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "portfolio", "lL56V7W8rNDimqnCW2UC");
      const docSnap = await getDoc(docRef);
      const projects = docSnap.data()?.project;
        const test = projects.find((item: ProjectObj) => item.id === +id!)
        console.log(test)
      setProject(projects.find((item: ProjectObj) => item.id === +id!));
    };
    fetchData().catch(console.error);
  }, []);

  const handleLinkClick = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const technologies = project.technologies && project.technologies.map((item) => <Technology technology={item} key={item}/>)

  return (
    <div className={`container ${classes["container-projects"]}`}>
      <div className={"wrapper"}>
      <Link to={`/`}><div className={classes['arrow-icon']}><ArrowBackIosNewIcon sx={{fontSize: '2rem'}}/></div></Link>
        <GlassCard>
          <Title title={project.name} class={classes.name} />
          <div className={classes["card-content"]}>
            <ProjectSlider images={project!.imgBanner}/>
            <div className={classes['section-title']}>About</div>
            <section className={classes.about}>{project.about}</section>
            <div className={classes['section-title']}>Technologies</div>
            <div className={classes['section-technology']}>{technologies}</div>
            {project.github && <>
              <div className={classes['section-title']}>Website</div>
              <section className={classes.link} onClick={() => handleLinkClick(project.demo!)}>{project.demo}</section>
              <div className={classes['section-title']}>Github</div>
              <section className={classes.link} onClick={() => handleLinkClick(project.github!)}>{project.github}</section>
            </>}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Project;