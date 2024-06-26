import { TodoProp } from "../components/TodoItem";

type LocalStorage<T> = {
  setData: (title: string, data: T) => void;
  getData: (title: string) => T | null;
};

export const storedTodos: LocalStorage<TodoProp[]> = {
  setData(title: string, data: TodoProp[]) {
    localStorage.setItem(title, JSON.stringify(data));
  },

  getData(title: string): TodoProp[] | null {
    const data = localStorage.getItem(title);
    if (data) {
      return JSON.parse(data);
    } else {
      return null;
    }
  },
};
