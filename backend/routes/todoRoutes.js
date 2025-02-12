const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Get all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos", details: error.message });
  }
});

// Add a new todo
router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({ title, description });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to add todo", details: error.message });
  }
});

// Update a todo
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo", details: error.message });
  }
});

// Delete a todo
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo", details: error.message });
  }
});

module.exports = router;


// // POST route to add a new todo
// router.post('/', async (req, res) => {
//   try {
//     const { title, description } = req.body;
//     const newTodo = new Todo({
//       title,
//       description,
//     });

//     const savedTodo = await newTodo.save();
//     res.status(201).json(savedTodo); // Return the added todo to the frontend
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to add todo', error });
//   }
// });

