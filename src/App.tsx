import { ReactElement } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { TodoProp } from "./components/TodoItem";
import todos from "./assets/initialData.json";
import "./App.css";

export default function App(): ReactElement {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="container mx-auto max-w-96">
        <Searchbar />
        <AddTodo />
        <hr className="h-px my-8 bg-gray-200 border-2" />
        <h2 className="mb-3 text-lg capitalize font-semibold text-gray-900">
          my todo list
        </h2>
        <TodoList todos={todos as TodoProp[]} />
      </main>
    </div>
  );
}
