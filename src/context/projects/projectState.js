import React, { useReducer } from 'react'

import projectContext from './projectContext'
import projectReducer from './projectReducer'

const ProjectState = (props) => {
  const initialState = {
    newProject : false
  }

  // Dispatch
  const [state, dispatch] = useReducer(projectReducer, initialState)

  //CRUD

  return (
    <projectContext.Provider
      value = {{
        newProject: state.newProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState
