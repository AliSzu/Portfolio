import React, { FC, useEffect, useState } from "react";
import classes from "./ProjectsList.module.scss";
import ProjectTile from "../ProjectTile/ProjectTile";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import ProjectObj from "../../../types/project";

const ProjectsList: FC<{}> = () => {
  const [project, setProjects] = useState<ProjectObj[]>();
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "portfolio", "lL56V7W8rNDimqnCW2UC");
      const docSnap = await getDoc(docRef);
      const projects = docSnap.data()?.project;
      setProjects(projects);
    };
    fetchData().catch(console.error);
  }, []);

  const projectsList = project?.map(
    (item) =>
      item.type === "web" && (
        <Link
          to={`/project/${item.id}`}
          style={{textDecoration: 'none'}}
          key={item.id}
        >
          <li>
            <ProjectTile project={item} />
          </li>
        </Link>
      )
  );

  return (
    <div className={classes.list}>
      <ul>{projectsList}</ul>
    </div>
  );
};

export default ProjectsList;
