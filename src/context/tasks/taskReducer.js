import { 
  ADD_TASK,
  DELETE_TASK,
  PROJECT_TASKS,
  TASK_STATUS,
  VALIDATE_TASK,
  ACTUAL_TASK
} from '../../types'

export default (state, action) => {
  switch(action.type) {
    case PROJECT_TASKS:
      return {
        ...state,
        projecttasks: state.tasks.filter(task => task.projectId === action.payload),
        taskerror: false
      }
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        taskerror: false
      }
    case VALIDATE_TASK:
      return {
        ...state,
        taskerror: true
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case TASK_STATUS:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
      }
    case ACTUAL_TASK:
      return {
        ...state,
        selectedtask: action.payload
      }
    default:
      return state
  }
}