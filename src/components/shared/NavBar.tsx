import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../store/index'; // Asegúrate de actualizar esta ruta
import { logout } from "../../store/reducers/authSlice";


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();

  // Usando RootState para tipar el estado en useSelector
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(logout());
  };

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
          <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/about" className="hover:bg-blue-700 px-3 py-2 rounded">
            About
          </Link>
          <Link to="/contact" className="hover:bg-blue-700 px-3 py-2 rounded">
            Contact
          </Link>

          <div
            className=" hover:bg-blue-700 flex items-center space-x-2 rounded"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src="https://i.pinimg.com/736x/9b/bd/92/9bbd9297b91dd8d8de331a4bfb6439db.jpg"
              className="w-8 h-8 rounded-full "
              alt="User"
            />
            <span className="">{user ? user.name : "Guest"}</span>
          </div>
          {showMenu && (
            <div>
              <a
                href="#!"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
