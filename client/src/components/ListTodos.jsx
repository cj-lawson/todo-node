/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import InputTodo from "./InputTodo";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  //   Update description on server
  const updateDescription = async (e, id, description) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todos.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  //   Delete Todo
  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-4 border-b border-1 border-[#a0a0a0] text-[#a0a0a0] border-opacity-60 pb-3 ">
        {/* <h3 className="opacity-60">Description</h3> */}
        <InputTodo />
      </div>

      <ul className="space-y-2.5">
        {todos.map((todo) => (
          <li
            key={todo.todo_id}
            className="flex justify-between py-2 px-2.5 group items-center justify-center hover:cursor-pointer hover:bg-[#292929] rounded-md"
          >
            <span className="resize-none block w-full rounded-lg border-0 py-1.5 bg-transparent text-gray-200 shadow-sm ring-none placeholder:text-zinc-500 sm:text-sm sm:leading-6 focus:outline-none focus:ring-0">
              {todo.description}
            </span>
            <div className="flex space-x-2">
              <EditTodo todo={todo} />
              <button
                onClick={() => deleteTodo(todo.todo_id)}
                className="opacity-0 group-hover:opacity-100 text-xs text-[#a0a0a0] bg-[#343434] p-1.5 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodos;
