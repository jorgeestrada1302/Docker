// src/routes/todo.routes.ts
import { Router } from 'express';
import Todo from '../models/todo';

const router = Router();

// Obtener todas las tareas
router.get('/', async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

// Obtener una tarea por ID
router.get('/:id', async (req, res) => {
  const todo = await Todo.findByPk(req.params.id);
  res.json(todo);
});

// Crear una nueva tarea
router.post('/', async (req, res) => {
  const { title, description, completed } = req.body;
  const newTodo = await Todo.create({ title, description, completed });
  res.json(newTodo);
});

// Actualizar una tarea existente
router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;
  await Todo.update({ title, description, completed }, {
    where: { id: req.params.id }
  });
  res.json({ message: 'Todo updated' });
});

// Eliminar una tarea
router.delete('/:id', async (req, res) => {
  await Todo.destroy({
    where: { id: req.params.id }
  });
  res.json({ message: 'Todo deleted' });
});

export default router;
