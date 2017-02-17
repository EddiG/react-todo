export const addTask = (task, tasks) => [...tasks, task];

export const toggleComplete = (taskTitle, tasks) => {
  const taskIndex = tasks.findIndex(task => task.title === taskTitle);
  const task = Object.assign({}, tasks[taskIndex]);
  task.complete = !task.complete;
  return [...tasks.slice(0, taskIndex), task, ...tasks.slice(taskIndex + 1)];
};
