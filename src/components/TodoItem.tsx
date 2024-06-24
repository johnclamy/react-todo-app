import { ReactElement } from "react";
import { MdEdit, /* MdEditOff, */ MdDelete } from "react-icons/md";
import ListIcon from "./ListIcon";

export type TodoProp = {
  id: number;
  todo: string;
  completed: boolean;
  userId?: number;
};

export type TodoProps = {
  todoItem: TodoProp;
  onDeleteTodo: (todoId: number) => void;
  onEditTodoData: (todo: TodoProp) => void;
};

const TodoItem = ({
  todoItem,
  onDeleteTodo,
  onEditTodoData,
}: TodoProps): ReactElement => (
  <li className="flex justify-between items-center bg-slate-100 mb-1 p-1 rounded-lg">
    <div className="flex items-center py-1 my-2 mr-2">
      <ListIcon colour="#2AAA8A" />
      {todoItem.todo}
    </div>
    <div className="bg-white p-1 rounded-md grid gap-1">
      <MdEdit
        className="text-amber-500 border border-amber-500 rounded-full m-1 cursor-pointer"
        title="Edit todo"
        onClick={() =>
          onEditTodoData({
            id: todoItem.id,
            todo: todoItem.todo,
            completed: todoItem.completed,
            userId: todoItem.userId,
          })
        }
      />
      {/* <MdEditOff
        className="text-amber-500 border border-amber-500 rounded-full m-1 cursor-pointer"
        title="Editing todo"
        
      /> */}
      <MdDelete
        className="text-red-500 border border-red-500 rounded-full m-1 cursor-pointer"
        title="Delete todo"
        onClick={() => onDeleteTodo(todoItem.id)}
      />
    </div>
  </li>
);

export default TodoItem;
