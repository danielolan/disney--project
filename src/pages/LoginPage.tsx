// LoginPage.tsx
import React from "react";

const LoginPage: React.FC = () => {
  const backgroundStyle = {
    backgroundImage: `url("https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/C9E09EB127322DE16A41800B80B9F1DF134E31F3C81C1F2DD34DE33690CA67F8/scale?format=webp&quality=90")`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div
      style={backgroundStyle}
      className=" h-screen flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        
        <h2 className="text-xl mb-6">Escribir correo para continuar</h2>
        <p className="text-gray-600 mb-4">
          Es necesario iniciar sesión en tu cuenta. En caso de no tener una,
          recibirás indicaciones para crearla.
        </p>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          className="border p-2 mb-4 w-full"
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          Continuar
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
