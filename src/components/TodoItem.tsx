import { ReactElement } from "react";
import listIcon from "../assets/listIcon.svg";

export type TodoProp = {
  id: number;
  todo: string;
  completed: boolean;
  userId?: number;
};

const TodoItem = ({ todoItem }: { todoItem: TodoProp }): ReactElement => (
  <li className="flex items-center py-1">
    <img className="size-5 mr-2" src={listIcon} alt="" />
    {todoItem.todo}
  </li>
);

export default TodoItem;
