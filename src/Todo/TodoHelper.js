export const addTask = (task, tasks) => [...tasks, task];

export const toggleComplete = (taskTitle, tasks) => {
  const taskIndex = tasks.findIndex(task => task.title === taskTitle);
  const toggledTask = { ...tasks[taskIndex], complete: !tasks[taskIndex].complete };
  return [
    ...tasks.slice(0, taskIndex),
    toggledTask,
    ...tasks.slice(taskIndex + 1),
  ];
};
