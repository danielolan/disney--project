import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-black py-2 px-4 text-white">
      <div className="flex justify-between items-center sm:flex-row flex-col">
        <Link className="text-lg font-semibold p-2" to="/">
          <img
            src={"./../../public/images/disneyLogo.svg"}
            className="w-[72px]"
            alt="Logo Main"
          />
        </Link>
        <div className="flex space-x-4 flex-wrap">
          {/* Links existentes */}
          <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">Home</Link>
          <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded">About</Link>
          <Link to="/contact" className="hover:bg-blue-700 px-3 py-2 rounded">Contact</Link>

          {/* Sección del usuario */}
          <div className="flex items-center space-x-2">
            <img src="https://i.pinimg.com/736x/9b/bd/92/9bbd9297b91dd8d8de331a4bfb6439db.jpg" className="w-8 h-8 rounded-full" alt="User" />
            <span>Daniel</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
