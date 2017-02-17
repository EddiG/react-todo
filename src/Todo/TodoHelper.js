export const addTask = (task, tasks) => [...tasks, task];

export const toggleComplete = (taskTitle, tasks) => tasks.map((task) => {
  if (task.title !== taskTitle) {
    return task;
  }

  return { ...task, complete: !task.complete };
});
