import React, { useContext, useEffect } from 'react'
import projectContext from '../../context/projects/projectContext';
import Project from './Project'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ProjectList = () => {

  // extract projects from initialState
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  // Get projects when component is loaded
  useEffect(() => {
    getProjects();
    // eslint-disable-next-line
  }, [])

  // check to project content
  if(projects.length === 0 ) return (<p>There are no projects, ¡start by creating one!</p>);

  return (
    <React.Fragment>
      <ul className="listado-proyectos">
        <TransitionGroup>
          {projects.map(project => (
            <CSSTransition
              key={project.id}
              timeout={200}
              classNames="proyecto"
            >
              <Project 
                project={project}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </React.Fragment>
  )
}

export default ProjectList
