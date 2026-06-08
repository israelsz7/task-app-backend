const Task = require('../models/taskModel');

const getAll = (req, res) => {
  res.json(Task.getAll());
};

const getById = (req, res) => {
  const task = Task.getById(Number(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

const create = (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  const task = Task.create(title, description);
  res.status(201).json(task);
};

const update = (req, res) => {
  const task = Task.update(Number(req.params.id), req.body);
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.json(task);
};

const remove = (req, res) => {
  const deleted = Task.remove(Number(req.params.id));
  if (!deleted) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
};

module.exports = { getAll, getById, create, update, remove };
