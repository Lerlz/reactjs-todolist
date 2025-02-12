const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" }, // Added description field
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Todo', todoSchema);
