import deepFreeze from 'deep-freeze';
import { addTask, toggleComplete } from './TodoHelper';

describe('addTask', () => {
  it('addTask must return the array with a new element', () => {
    const tasks = [{ title: 'first', complete: false }];
    const newTask = { title: 'second', complete: false };
    const expected = [{ title: 'first', complete: false }, { title: 'second', complete: false }];
    deepFreeze(tasks);
    const result = addTask(newTask, tasks);
    expect(result).toEqual(expected);
  });
});

describe('toggleComplete', () => {
  it('toggleComplete must invert complete status of the task', () => {
    const tasks = [{ title: 'first', complete: false }];
    const expected = [{ title: 'first', complete: true }];
    deepFreeze(tasks);
    const result = toggleComplete('first', tasks);
    expect(result).toEqual(expected);

    const expected2 = [{ title: 'first', complete: false }];
    deepFreeze(result);
    const result2 = toggleComplete('first', result);
    expect(result2).toEqual(expected2);
  });
});
