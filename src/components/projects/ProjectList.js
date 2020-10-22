import React from 'react'
import Project from './Project'

const ProjectList = () => {

  const projects = [
    {name: 'Virtual Store'},
    {name: 'Intranet'},
    {name: 'Website design'}
  ];

  return (
    <React.Fragment>
      <ul className="listado-proyectos">
        {projects.map(project => (
          <Project 
            project={project}
          />
        ))}
      </ul>
    </React.Fragment>
  )
}

export default ProjectList
