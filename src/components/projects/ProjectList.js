import React, { useContext, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext';
import Project from './Project'

const ProjectList = () => {

  // extract projects from initialState
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects when component is loaded
  useEffect(() => {
    getProjects();
  }, [])

  // check to project content
  if(projects.length === 0 ) return (<p>There are no projects, ¡start by creating one!</p>);

  return (
    <React.Fragment>
      <ul className="listado-proyectos">
        {projects.map(project => (
          <Project 
            key={project.id}
            project={project}
          />
        ))}
      </ul>
    </React.Fragment>
  )
}

export default ProjectList
