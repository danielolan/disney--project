
import { MainLayout } from "../components/layouts/MainLayout";

const ContactPage = () => {
  return (
    <MainLayout>
      <div className="pt-12 pb-6">
        <img
          className="w-[200px] mx-auto"
          src="./../../public/images/disneyLogo.svg"
        />
      </div>
      <div className="text-white flex flex-col items-center">
        <div className="max-w-lg w-full bg-gray-800 p-8 rounded-lg shadow-xl">
          <div className="flex flex-col items-center mb-4">
            <img
              src="/public/images/perfil.svg"
              alt="DANIEL OLANO"
              className="w-32 h-32 rounded-full border-2 border-gray-300 mb-3"
            />
            <h2 className="text-3xl font-bold text-center">Contacto</h2>
          </div>
          <div className="text-lg mb-2 flex items-center">
            <img
              src="/public/images/email.svg"
              alt="Email Icon"
              className="w-6 h-6 mr-2"
            />
            da-olano@hotmail.com
          </div>
          <div className="text-lg mb-2 flex items-center">
            <img
              src="/public/images/icons8-linkedin.svg"
              alt="LinkedIn Icon"
              className="w-6 h-6 mr-2"
            />
            <a
              href="https://www.linkedin.com/in/daniel-andres-olano-081035292/"
              className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out"
            >
              Daniel Andres Olano dev
            </a>
          </div>
          <div className="text-lg flex items-center">
            <img
              src="/public/images/phone.svg"
              alt="Phone Icon"
              className="w-6 h-6 mr-2 text-blue-500"
            />
            3219702802
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default ContactPage;
