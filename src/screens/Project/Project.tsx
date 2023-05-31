import React, { FC, useState, useEffect } from "react";
import classes from "./Project.module.scss";
import { Link, useParams } from "react-router-dom";
import Title from "../../components/common/Title/Title";
import { doc, getDoc } from "firebase/firestore";
import ProjectObj from "../../types/project";
import { db } from "../../firebase";

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

  return (
    <div className={`container ${classes["container-projects"]}`}>
      <div className={"wrapper"}>
      <Link to={`/`}>Home</Link>
        <div className={classes.card}>
          <Title title={project!.name} class={classes.name} />
          <div className={classes["card-content"]}>
            {project!.shortDesc}
            {/* <img src={project!.imgBanner[0]} className={classes.image}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;