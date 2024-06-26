import { ReactElement, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoProp } from "./components/TodoItem";
import { storedTodos } from "./db/local-storage";
import defaultTodos from "./assets/initialData.json";

export default function App(): ReactElement {
  const [todos, setTodos] = useState<TodoProp[] | []>([]);
  const [editData, setEditData] = useState<TodoProp | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleAddTodo = (text: string) => {
    const count = todos.length;
    const id = count ? todos[count - 1].id + 1 : count;
    const todo = {
      id,
      todo: text,
      completed: false,
      userId: Math.floor(Math.random() * 100) + 1,
    };
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    storedTodos.setData("todo-list", newTodos);
  };

  const handleUpdateTodo = (updatedTodo: TodoProp | null | undefined) => {
    const itemUpdate = todos.find((todo) => todo.id === updatedTodo?.id);
    const remainTodos = todos.filter((todo) => todo.id !== updatedTodo?.id);

    if (
      itemUpdate &&
      Object.keys(itemUpdate).length !== 0 &&
      updatedTodo &&
      Object.keys(updatedTodo).length !== 0
    ) {
      const newTodos = [
        ...remainTodos,
        { ...itemUpdate, todo: updatedTodo.todo },
      ];
      setTodos(newTodos);
      storedTodos.setData("todo-list", newTodos);
    }
  };

  const handleEditTodoData = (editedData: TodoProp) => {
    setEditData(editedData);
  };

  const handleDelTodo = (todoId: number) => {
    const newTodos: TodoProp[] = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
    storedTodos.setData("todo-list", newTodos);
  };

  const handleGetInitialTodos = () => {
    const localTodos: TodoProp[] | null = storedTodos.getData("todo-list");
    if (localTodos) {
      setTodos(localTodos);
      console.log("okay:", localTodos);
      return;
    }
  };

  useEffect(() => {
    handleGetInitialTodos();
    storedTodos.setData("todo-list", defaultTodos);
    console.log("failed getting initial todos");
  }, []);

  useEffect(() => {
    handleGetInitialTodos();
  }, []);

  const renderTodos = !todos.length ? (
    <section className="flex justify-center my-8 mx-2 sm:mx-0 bg-yellow-50 border-spacing-2 border-yellow-100 rounded-md p-3 sm:p-5">
      <p className="text-lg text-gray-500 md:text-xl text-center">
        <strong>Oops!</strong> Currently <strong>no</strong> todos to be shown
      </p>
    </section>
  ) : (
    <TodoList
      todos={todos}
      isEdit={isEdit}
      searchTerm={searchTerm}
      onDeleteTodo={handleDelTodo}
      onEditTodoData={handleEditTodoData}
    />
  );

  return (
    <>
      <Navbar />
      <Header />
      <main className="container mx-auto max-w-96">
        <Searchbar searchTerm={searchTerm} onSetSearchTerm={setSearchTerm} />
        <AddTodo
          editData={editData}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          onAddTodo={handleAddTodo}
          onUpdateTodo={handleUpdateTodo}
        />
        <hr className="h-px my-8 bg-gray-200 border-2" />
        <h2 className="mb-3 mx-2 sm:mx-0 text-lg capitalize font-semibold text-gray-900">
          my todo list
        </h2>
        {renderTodos}
      </main>
    </>
  );
}
