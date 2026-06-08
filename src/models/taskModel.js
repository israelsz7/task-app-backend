let tasks = [];
let nextId = 1;

const getAll = () => tasks;

const getById = (id) => tasks.find((t) => t.id === id);

const create = (title, description) => {
  const task = { id: nextId++, title, description, done: false };
  tasks.push(task);
  return task;
};

const update = (id, data) => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;
  tasks[index] = { ...tasks[index], ...data };
  return tasks[index];
};

const remove = (id) => {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
};

module.exports = { getAll, getById, create, update, remove };
