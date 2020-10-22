import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import FormTask from '../tasks/FormTask'
import TaskList from '../tasks/TaskList'

const Projects = () => {
  return (
    <div>
      <div className="contenedor-app">
        <Sidebar />
        <div className="seccion-principal">
          <Header />
          <main>
            <FormTask />
            <div className="contenedor-tareas">
              <TaskList />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Projects
