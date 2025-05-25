const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { authenticateToken, secretKey } = require('../middleware/auth');
const fakeUser = require('../utils/fakeUser');

let tasks = [];
let nextId = 1;


router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== fakeUser.username || !bcrypt.compareSync(password, fakeUser.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});


router.get('/', authenticateToken, (req, res) => {
  let result = [...tasks];


  if (req.query.title) {
    result = result.filter(task => task.title.toLowerCase().includes(req.query.title.toLowerCase()));
  }


  if (req.query.sort === 'asc') {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (req.query.sort === 'desc') {
    result.sort((a, b) => b.title.localeCompare(a.title));
  }


  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedTasks = result.slice(startIndex, endIndex);

  res.json({
    total: result.length,
    page,
    limit,
    tasks: paginatedTasks,
  });
});


router.get('/:id', authenticateToken, (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });
  res.json(task);
});


router.post('/', authenticateToken, (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const newTask = { id: nextId++, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});


router.put('/:id', authenticateToken, (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  task.title = title;
  task.description = description;
  res.json(task);
});

router.delete('/:id', authenticateToken, (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks.splice(index, 1);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
