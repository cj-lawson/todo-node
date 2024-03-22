/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  //   Edit description on server
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  //   Delete Todo
  // const deleteTodo = async (id) => {
  //   try {
  //     const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
  //       method: "DELETE",
  //     });

  //     setTodos(todos.filter((todo) => todo.todo_id !== id));
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  return (
    <li
      key={todo.todo_id}
      className="flex justify-between py-2 px-2.5 group items-center justify-center hover:cursor-pointer hover:bg-[#292929] rounded-md"
    >
      <form action="" onSubmit={(e) => updateDescription(e)}>
        <input
          type="text"
          className="resize-none block w-full rounded-lg border-0 py-1.5 bg-transparent text-gray-200 shadow-sm ring-none placeholder:text-zinc-500 sm:text-sm sm:leading-6 focus:outline-none focus:ring-0"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>

      <div className="flex space-x-2">
        {/* <EditTodo todo={todo} /> */}
        {/* <button
      onClick={() => deleteTodo(todo.todo_id)}
      className="opacity-0 group-hover:opacity-100 text-xs text-[#a0a0a0] bg-[#343434] p-1.5 rounded-md"
    >
      Delete
    </button> */}
      </div>
    </li>
  );
};

export default TodoItem;
