const AddTodo = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-8">
      <input
        type="text"
        placeholder="Add a todo..."
        className="text-sm text-gray-500 w-full py-5 px-4 h-2 border border-gray-200 rounded mb-2"
      />
      <button
        type="button"
        className="bg-cyan-600 text-white uppercase hover:bg-cyan-900 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 w-full mt-2 py-2"
      >
        add
      </button>
    </section>
  );
};

export default AddTodo;
