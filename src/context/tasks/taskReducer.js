import { 
  ADD_TASK,
  PROJECT_TASKS,
  VALIDATE_TASK
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
        tasks: [...state.tasks, action.payload],
        taskerror: false
      }
    case VALIDATE_TASK:
      return {
        ...state,
        taskerror: true
      }
    default:
      return state
  }
}