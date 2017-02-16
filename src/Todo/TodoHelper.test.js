import { addTask } from './TodoHelper';

it('addTask must return the array with a new element', () => {
  const tasks = [{ title: 'first', complete: false }];
  const newTask = { title: 'second', complete: false };
  const expected = [{ title: 'first', complete: false }, { title: 'second', complete: false }];
  const result = addTask(newTask, tasks);
  expect(result).toEqual(expected);
});

it('addTask should not mutate the original tasks list', () => {
  const tasks = [{ title: 'first', complete: false }];
  const newTask = { title: 'second', complete: false };
  const expected = [{ title: 'first', complete: false }];
  addTask(newTask, tasks);
  expect(tasks).toEqual(expected);
});
