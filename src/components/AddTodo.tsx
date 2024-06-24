import { Dispatch, SyntheticEvent, useEffect, useState } from "react";
import { TodoProp } from "./TodoItem";

type AddTodoProps = {
  editData?: TodoProp | null;
  onAddTodo: (text: string) => void;
  isEdit: boolean;
  setIsEdit: Dispatch<React.SetStateAction<boolean>>;
  onUpdateTodo: (updatedTodo: TodoProp | null | undefined) => void;
};

const AddTodo = ({
  onAddTodo,
  editData,
  isEdit,
  setIsEdit,
  onUpdateTodo,
}: AddTodoProps) => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    if (!isEdit) {
      onAddTodo(text);
    } else {
      onUpdateTodo({ ...(editData as TodoProp), todo: text });
    }

    setText("");
    setIsEdit(false);
  };

  useEffect(() => {
    if (editData && Object.keys(editData).length !== 0) {
      setText(editData.todo);
      setIsEdit(true);
    }
  }, [editData]);

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
        className={`w-full mt-2 py-2 mx-2 sm:mx-0 uppercase focus:outline-none focus:ring ${
          !isEdit
            ? "bg-cyan-600 text-white hover:bg-cyan-900 active:bg-cyan-700 focus:ring-cyan-300"
            : "bg-yellow-500 text-black hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-300"
        }`}
      >
        {isEdit ? "edit" : "add"}
      </button>
    </form>
  );
};

export default AddTodo;
