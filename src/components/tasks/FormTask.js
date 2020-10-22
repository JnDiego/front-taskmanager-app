import React from 'react'

const FormTask = () => {
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
