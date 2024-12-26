// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/todoDB', { useNewUrlParser: true, useUnifiedTopology: true });

// const TodoSchema = new mongoose.Schema({
//     task: String,
//     completed: Boolean
// });

// const Todo = mongoose.model('Todo', TodoSchema);

// // CRUD Operations
// app.get('/todos', async (req, res) => {
//     const todos = await Todo.find();
//     res.json(todos);
// });

// app.post('/todos', async (req, res) => {
//     const newTodo = new Todo({
//         task: req.body.task,
//         completed: false
//     });
//     await newTodo.save();
//     res.json(newTodo);
// });

// app.put('/todos/:id', async (req, res) => {
//     const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
//     res.json(updatedTodo);
// });

// app.delete('/todos/:id', async (req, res) => {
//     await Todo.findByIdAndDelete(req.params.id);
//     res.sendStatus(204);
// });

// // Start the server
// const PORT = 3001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/todoDB', { useNewUrlParser: true, useUnifiedTopology: true });

const TodoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
    dueDate: Date,        // Add due date field
    priority: String      // Add priority field
});

const Todo = mongoose.model('Todo', TodoSchema);

// CRUD Operations
app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const newTodo = new Todo({
        task: req.body.task,
        completed: false,
        dueDate: req.body.dueDate,        // Save due date
        priority: req.body.priority       // Save priority
    });
    await newTodo.save();
    res.json(newTodo);
});

app.put('/todos/:id', async (req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        {
            completed: req.body.completed,
            dueDate: req.body.dueDate,    // Update due date
            priority: req.body.priority   // Update priority
        },
        { new: true }
    );
    res.json(updatedTodo);
});

app.delete('/todos/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
