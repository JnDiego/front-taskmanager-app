import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

import { 
  PROJECT_TASKS,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  TASK_STATUS,
  ACTUAL_TASK
} from '../../types'

const TaskState = props => {
  const initialState = {
    tasks: [
      { id:1, name: 'Select platform', status: true, projectId: 1 },
      { id:2, name: 'Select colors', status: false, projectId: 2 },
      { id:3, name: 'Select payment platforms', status: true, projectId: 3 },
      { id:4, name: 'Select platform', status: true, projectId: 1 },
      { id:5, name: 'Select colors', status: false, projectId: 2 },
      { id:6, name: 'Select payment platforms', status: true, projectId: 3 },
      { id:7, name: 'Select platform', status: true, projectId: 1 },
      { id:8, name: 'Select colors', status: false, projectId: 1 },
      { id:9, name: 'Select payment platforms', status: true, projectId: 4 },
      { id:10, name: 'Select Hosting', status: false, projectId: 4 },
      { id:11, name: 'Select Hosting', status: false, projectId: 3 },
      { id:12, name: 'Select Hosting', status: false, projectId: 1 }
    ],
    projecttasks: null,
    taskerror: false,
    selectedtask: null
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

  // Add new task to select project
  const addTask = task => {
    dispatch({
      type: ADD_TASK,
      payload: task
    })
  }

  // Validate task for error
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    })
  }

  // Delete task by ID
  const deleteTask = id => {
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  }

  // Change status task
  const changeStatusTask = task => {
    dispatch({
      type: TASK_STATUS,
      payload: task
    })
  }

  // Extract a task for editing
  const setActualTask = task => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task
    })
  }

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projecttasks: state.projecttasks,
        taskerror: state.taskerror,
        selectedtask: state.selectedtask,
        getProjectTasks,
        addTask,
        validateTask,
        deleteTask,
        changeStatusTask,
        setActualTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;