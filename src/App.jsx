import Todo from "./components/Todo";
import { useState, useEffect } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const storedData = localStorage.getItem("todo");

  const [todos, setTodos] = useState(storedData ? JSON.parse(storedData) : []);

  const handleFormData = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        title,
        description,
      },
    ]);
    setTitle("");
    setDescription("");
  };

  const deleteTodo = (idx) => {
    const filteredTodos = todos.filter((val, i) => {
      return idx != i;
    });
    setTodos(filteredTodos);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1 className="heading">Todo App</h1>
      <form onSubmit={handleFormData} className="input-box">
        <span>
          <h3>Title</h3>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            name="title"
          />
        </span>
        <span>
          <h3>Description</h3>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            rows="6"
          ></textarea>
        </span>
        <button type="submit">Add</button>
      </form>

      {todos?.map((data, idx) => (
        <Todo
          key={idx}
          title={data.title}
          description={data.description}
          index={idx}
          deleteFun={deleteTodo}
        />
      ))}
    </div>
  );
};

export default App;
