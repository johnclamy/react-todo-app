const Navbar = () => {
  return (
    <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-grey-900 mb-4 md:mb-0">
        MyTodos
      </a>
      <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 capitalize hover:bg-slate-100" href="/">
          home
        </a>
        <a className="mr-5 capitalize hover:bg-slate-100" href="/">
          shop
        </a>
        <a className="mr-5 capitalize hover:bg-slate-100" href="/">
          about
        </a>
        <a className="mr-5 capitalize hover:bg-slate-100" href="/">
          contact
        </a>
      </div>
      <button className="inline-flex items-center bg-yellow-500 border-0 hover:bg-yellow-300 active:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 py-1 px-3 mt-4 md:mt-0">
        Sign in
      </button>
    </nav>
  );
};

export default Navbar;
