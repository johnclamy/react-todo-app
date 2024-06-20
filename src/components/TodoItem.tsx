import { ReactElement } from "react";
import ListIcon from "./ListIcon";

export type TodoProp = {
  id: number;
  todo: string;
  completed: boolean;
  userId?: number;
};

const TodoItem = ({ todoItem }: { todoItem: TodoProp }): ReactElement => (
  <li className="flex items-center py-1">
    <ListIcon colour="#2AAA8A" />
    {todoItem.todo}
  </li>
);

export default TodoItem;
