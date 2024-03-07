import React from 'react';
import { MainLayout } from '../components/layouts/MainLayout';

const ContactPage = () => {
    return (
        <MainLayout>
            <div className="pt-12 pb-6"> {/* Add padding to top and bottom */}
                <img className="w-[200px] mx-auto" src="./../../public/images/disneyLogo.svg" />
            </div>
            <div className="text-white flex flex-col items-center"> {/* Remove min-h-screen and justify-center */}
                <div className="max-w-lg w-full bg-gray-800 p-8 rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold text-center mb-4">Contacto</h2>
                    <p className="text-lg mb-2"><span className="font-semibold">Email:</span> da-olano@hotmail.com</p>
                    <p className="text-lg mb-2">
                        <span className="font-semibold">LinkedIn:</span> 
                        <a href="https://www.linkedin.com/in/andres-olano-081035292/" 
                            className="text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out">
                            Andrés Olano
                        </a>
                    </p>
                    <p className="text-lg"><span className="font-semibold">Teléfono:</span> 3219702802</p>
                </div>
            </div>
        </MainLayout>
    );
};
export default ContactPage;
