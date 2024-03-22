/* eslint-disable no-unused-vars */
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-full">
      <form
        action=""
        onSubmit={onFormSubmit}
        className="flex space-x-6 items-center"
      >
        <input
          type="text"
          className="pl-4 py-3 block w-full rounded-lg border-0 py-1.5 bg-[#292929] text-gray-200 shadow-sm ring-1 ring-inset ring-[#292929] placeholder:text-zinc-500 sm:text-sm sm:leading-6 focus:outline-none focus:ring-0"
          placeholder="Create a task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
    </div>
  );
};

export default InputTodo;
