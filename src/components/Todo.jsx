const Todo = ({ title, description, index, deleteFun }) => {
  return (
    <div className="todo">
      <div className="todo-data">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <button onClick={() => deleteFun(index)}>x</button>
    </div>
  );
};

export default Todo;
