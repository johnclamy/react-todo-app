import { ReactElement } from "react";
import TodoItem, { TodoProp } from "./TodoItem";

type TodosProp = {
  todos: TodoProp[];
};

const TodoList = ({ todos }: TodosProp): ReactElement => {
  return (
    <ul className="max-w-md mb-8 space-y-1 text-gray-500 list-inside">
      {todos.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  );
};

export default TodoList;
