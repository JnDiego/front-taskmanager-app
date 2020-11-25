import React, { useContext } from 'react'
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({project}) => {

  // get state from projects
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  // Get context task function
  const tasksContext = useContext(taskContext);
  const { getProjectTasks } = tasksContext;

  // Add actual project
  const selectProject = id => {
    actualProject(id) // Set an actual project
    getProjectTasks(id); // Filter tasks by ProjectID
  }

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  )
}

export default Project
