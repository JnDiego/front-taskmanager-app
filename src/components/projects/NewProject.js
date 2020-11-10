import React, { useContext, useState } from 'react'
import projectContext from '../../context/projects/projectContext'

const NewProject = () => {

  // get state from form
  const projectsContext = useContext(projectContext);
  const { form, errorform, showForm, addProject, showError } = projectsContext;

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
    if(name === '') {
      showError();
      return;
    }

    // Add project to state
    addProject(project)

    // Reset form
    setProject({
      name: ''
    })
  }

  // Show form
  const onClickForm = () => {
    showForm();
  }

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickForm}
      >
        New Project
      </button>

      { form && (
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

      { errorform && (
        <p className="mensaje error">
          Project name is required
        </p>
      )}
    </React.Fragment>
  )
}

export default NewProject
