import React, { FC, useEffect, useState } from "react";
import classes from "./ProjectsList.module.scss";
import ProjectTile from "../ProjectTile/ProjectTile";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Project from "../../../types/project";

const ProjectsList: FC<{}> = () => {
  const [project, setProjects] = useState<Project[]>();
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "portfolio", "lL56V7W8rNDimqnCW2UC");
      const docSnap = await getDoc(docRef);
      const projects = docSnap.data()?.project;
      setProjects(projects)
    };
    fetchData().catch(console.error);
  }, []);

  const projectsList = project?.map((item) => <li key={item.name}><ProjectTile project={item}/></li>)

  return (
    <div className={classes.list}>
      <ul>
        {projectsList}
      </ul>
    </div>
  );
};

export default ProjectsList;
