const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// Get a todo
app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const getTodo = await pool.query(
      `SELECT * FROM todo WHERE todo_id = ${id}`
    );
    res.json(getTodo.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// update a todo

app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
