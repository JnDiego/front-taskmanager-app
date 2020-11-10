import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';

const FormTask = () => {

  // get active project
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

    // Validate actualProject
  if(!project) {
    return (
      null
    )
  }

  // Array destructuring to extract actual project
  const [actualProject] = project

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input type="text" name="name" id="name" className="input-text" placeholder="Task Name"/>
        </div>

        <div className="contenedor-input">
          <input type="submit" className="btn btn-primario btn-submit btn-block" value="Add Task"/>
        </div>
      </form>
    </div>
  )
}

export default FormTask
