import { TodoProp } from "../components/TodoItem";

export default function searchListBy(searchTerm: string) {
  return (listItem: TodoProp) => {
    return (
      !searchTerm ||
      listItem.todo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
}
