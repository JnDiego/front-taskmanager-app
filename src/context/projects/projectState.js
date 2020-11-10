import React, { useReducer } from 'react'

import * as uuid from 'uuid';

import projectContext from './projectContext'
import projectReducer from './projectReducer'
import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT } from '../../types'

const ProjectState = (props) => {

  const projects = [
    { id: 1, name: 'Virtual Store' },
    { id: 2, name: 'Intranet' },
    { id: 3, name: 'Website design' },
    { id: 4, name: 'MERN' },
  ]

  const initialState = {
    projects : [],
    form: false,
    errorform: false,
    project: null,
  }

  // Dispatch
  const [state, dispatch] = useReducer(projectReducer, initialState)

  //CRUD
  const showForm = () => {
    dispatch({
      type: PROJECT_FORM
    })
  }

  // Get projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects
    })
  }

  //Add new project
  const addProject = project => {
    project.id = uuid.v4();
    //Insert project in state
    dispatch({
      type: ADD_PROJECT,
      payload: project
    })
  }

  // Validate form for errors
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM
    })
  }

  // Select project that user clicks
  const actualProject = projectID => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectID
    })
  }

  // Delete a project
  const deleteProject = projectID => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectID
    })
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform: state.errorform,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        actualProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState
