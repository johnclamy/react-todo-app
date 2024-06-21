import { Dispatch } from "react";

type SearchbarProp = {
  onSetSearchTerm: Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
};

const Searchbar = ({ searchTerm, onSetSearchTerm }: SearchbarProp) => (
  <section className="flex flex-col items-center justify-center border border-cyan-500 rounded-lg p-2 mt-6 mx-2 sm:mx-0">
    <h1 className="text-cyan-600 text-lg mb-3 mt-2 capitalize">search todos</h1>
    <input
      type="text"
      placeholder="Search todos"
      value={searchTerm}
      onChange={(e) => onSetSearchTerm(e.target.value)}
      className="text-sm text-gray-500 w-full py-5 px-4 h-2 border border-gray-200 focus:outline-none focus:ring focus:border-cyan-500 rounded mb-2"
    />
  </section>
);

export default Searchbar;
