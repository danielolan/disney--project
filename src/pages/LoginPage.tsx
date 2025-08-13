import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { login, mockUser, resetLogin } from "../store/reducers/authSlice";
import disneyLogo from "../assets/img/disneyLogo.svg";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const { loginError } = useSelector((state: RootState) => state.auth);

  const backgroundStyle = {
    backgroundImage: `url("https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/C9E09EB127322DE16A41800B80B9F1DF134E31F3C81C1F2DD34DE33690CA67F8/scale?format=webp&quality=90")`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetLogin());
    if (!email || !password) {
      setError("El correo electrónico y la contraseña no pueden estar vacíos.");
      return;
    }

    dispatch(login({ email, password }));
    localStorage.setItem("user", JSON.stringify(mockUser));
    setError("");
  };

  return (
    <div
      className="h-screen flex justify-center items-center flex-col"
      style={backgroundStyle}
    >
      <img
        src={disneyLogo}
        className="w-[72px] mb-9"
        alt="Logo Main"
      />
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-xl mb-6 text-black">
          Escribir correo para continuar
        </h2>
        <p className="text-gray-600 mb-4">
          Es necesario iniciar sesión en tu cuenta. En caso de no tener una,
          recibirás indicaciones para crearla.
        </p>
        {loginError && <p className="text-red-500">{loginError}</p>}
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border p-2 mb-4 w-full text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="border p-2 mb-4 w-full text-black "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl w-full"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
