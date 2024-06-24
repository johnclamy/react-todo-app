import { ReactElement } from "react";
import TodoItem, { TodoProp } from "./TodoItem";
import searchListBy from "../helper/searchListBy";

type TodosProps = {
  todos: TodoProp[];
  isEdit: boolean;
  searchTerm: string;
  onDeleteTodo: (todoId: number) => void;
  onEditTodoData: (todo: TodoProp) => void;
};

const TodoList = ({
  todos,
  isEdit,
  searchTerm,
  onDeleteTodo,
  onEditTodoData,
}: TodosProps): ReactElement => {
  return (
    <ul className="max-w-md mb-8 ml-2 sm:ml-0 space-y-1 text-gray-500 list-inside">
      {todos.filter(searchListBy(searchTerm)).map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          isEdit={isEdit}
          todoItem={todoItem}
          onDeleteTodo={onDeleteTodo}
          onEditTodoData={onEditTodoData}
        />
      ))}
    </ul>
  );
};

export default TodoList;
