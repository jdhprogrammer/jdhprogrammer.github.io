import React from "react";
import projects from "./projects.json"

const ProjectContext = React.createContext({
  projects: projects
});

export default ProjectContext;
