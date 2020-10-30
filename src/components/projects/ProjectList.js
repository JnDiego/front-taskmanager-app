import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import Project from './Project'

const ProjectList = () => {

  // get state from form
  const projectsContext = useContext(projectContext);
  const { projects } = projectsContext;

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
