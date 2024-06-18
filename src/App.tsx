import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="container mx-auto max-w-96">
        <Searchbar />
        <AddTodo />
      </main>
    </div>
  );
}

export default App;
