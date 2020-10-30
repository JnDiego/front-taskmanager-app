import React, { useContext, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext';
import Project from './Project'

const ProjectList = () => {

  // extract projects from initialState
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
  }, [])

  // check to project content
  if(projects.length === 0 ) return null;

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
