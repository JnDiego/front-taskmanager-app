import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

import { 
  PROJECT_TASKS
} from '../../types'

const TaskState = props => {
  const initialState = {
    tasks: [
      { name: 'Select platform', status: true, projectId: 1 },
      { name: 'Select colors', status: false, projectId: 2 },
      { name: 'Select payment platforms', status: true, projectId: 3 },
      { name: 'Select platform', status: true, projectId: 1 },
      { name: 'Select colors', status: false, projectId: 2 },
      { name: 'Select payment platforms', status: true, projectId: 3 },
      { name: 'Select platform', status: true, projectId: 1 },
      { name: 'Select colors', status: false, projectId: 1 },
      { name: 'Select payment platforms', status: true, projectId: 4 },
      { name: 'Select Hosting', status: false, projectId: 4 },
      { name: 'Select Hosting', status: false, projectId: 3 },
      { name: 'Select Hosting', status: false, projectId: 1 }
    ],

  }

  // Create Dispatch
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Create functions

  // Get project tasks
  const getProjectTasks = projectId => {
    dispatch({
      type: PROJECT_TASKS,
      payload: projectId
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        getProjectTasks
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;