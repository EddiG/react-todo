import { addTask, toggleComplete } from './TodoHelper';

describe('addTask', () => {
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
});

describe('toggleComplete', () => {
  it('toggleComplete must invert complete status of the task', () => {
    const tasks = [{ title: 'first', complete: false }];
    const expected = [{ title: 'first', complete: true }];
    const result = toggleComplete('first', tasks);
    expect(result).toEqual(expected);

    const expected2 = [{ title: 'first', complete: false }];
    const result2 = toggleComplete('first', result);
    expect(result2).toEqual(expected2);
  });

  it('toggleComplete should not mutate the original tasks list', () => {
    const tasks = [{ title: 'first', complete: false }];
    const expected = [{ title: 'first', complete: false }];
    toggleComplete('first', tasks);
    expect(tasks).toEqual(expected);
  });
});
