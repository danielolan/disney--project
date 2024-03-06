const NavBar = () => {
  return (
    <nav className="bg-trasparent py-2 px-4 text-white">
      <div className="flex justify-between items-center sm:flex-row flex-col">
        <div className="text-lg font-semibold p-2">
          <img
            src={"./../../public/images/disneyLogo.svg"}
            className="w-[72px]"
            alt="Logo Main"
          />
        </div>
        <div className="flex space-x-4 flex-wrap">
          <a href="/" className="hover:bg-blue-700 px-3 py-2 rounded">
            Home
          </a>
          <a href="/about" className="hover:bg-blue-700 px-3 py-2 rounded">
            About
          </a>
          <a href="/services" className="hover:bg-blue-700 px-3 py-2 rounded">
            Services
          </a>
          <a href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
