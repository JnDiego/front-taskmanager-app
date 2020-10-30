import React, { useContext, useState } from 'react'
import ProjectContext from '../../context/projects/projectContext'

const NewProject = () => {

  // get state from form
  const projectsContext = useContext(ProjectContext);
  const { newProject } = projectsContext;

  const [project, setProject] = useState({
    name: '',
  })

  const { name } = project;

  const onChangeProject = e => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();

    // Validate project

    // Add project to state

    // Reset form
  }

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
      >
        New Project
      </button>

      { newProject && (
        <form
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmit}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />

          <input 
            type="submit" 
            className="btn btn-primario btn-block"
            value="Add Project"
          />
        </form>
      )}
    </React.Fragment>
  )
}

export default NewProject
