import { SyntheticEvent, useState } from "react";

type OnAddTodo = {
  onAddTodo: (text: string) => void;
};

const AddTodo = ({ onAddTodo }: OnAddTodo) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center mt-8 mx-2 sm:mx-0"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
        className="text-sm text-gray-500 w-full py-5 px-4 h-2 border border-gray-200 focus:outline-none focus:ring focus:border-cyan-500 rounded mb-2"
      />
      <button
        type="submit"
        className="mx-2 sm:mx-0 bg-cyan-600 text-white uppercase hover:bg-cyan-900 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 w-full mt-2 py-2"
      >
        add
      </button>
    </form>
  );
};

export default AddTodo;
