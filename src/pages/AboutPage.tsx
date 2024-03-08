import React from "react";
import { MainLayout } from "../components/layouts/MainLayout";
import { FaReact, FaCloud, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <video className="object-cover w-full h-full" autoPlay muted >
            <source src="https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2024/01/26/1706274878-disney.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        <div className="relative z-10 bg-blue-app text-white min-h-screen flex flex-col justify-center items-center">
          <div className="container mx-auto px-4 py-8 ">
            <section className="text-center my-8">
              <h2 className="text-4xl font-semibold mb-4">
                Bienvenidos al Mundo de Disney
              </h2>
              <p className="text-lg">
                Disney Project es una aplicación web dinámica y visualmente
                atractiva diseñada para ofrecer una experiencia interactiva al
                explorar el mundo de Disney.
              </p>
            </section>

            <section className="my-8">
              <h3 className="text-3xl font-semibold mb-4">Características</h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Navegación intuitiva a través de la barra de navegación.</li>
                <li>Visualización de categorías con miniaturas y GIFs.</li>
                <li>Carrusel de imágenes destacadas en la página de inicio.</li>
                <li>
                  Páginas específicas para detalles de contenido y categorías.
                </li>
                <li>Autenticación de usuarios y personalización del perfil.</li>
              </ul>
            </section>

            <section className="my-8">
              <h3 className="text-3xl font-semibold mb-4">
                Tecnologías Utilizadas
              </h3>
              <div className="flex space-x-4 items-center justify-center">
                <FaReact size={40} className="text-blue-500" />
                <span className="text-lg">React, Redux, TailwindCSS</span>
                <FaCloud size={40} className="text-gray-500" />
                <span className="text-lg">Axios, React Router</span>
              </div>
            </section>

            <section className="my-8">
              <h3 className="text-3xl font-semibold mb-4">Instalación</h3>
              <p className="text-lg">
                Para iniciar el proyecto localmente, sigue estos pasos:
              </p>
              <ol className="list-decimal list-inside ml-4">
                <li>
                  Clonar el repositorio:{" "}
                  <code>
                    git clone https://github.com/danielolan/disney--project.git
                  </code>
                </li>
                <li>
                  Cambiar al directorio del proyecto:{" "}
                  <code>cd disney-project</code>
                </li>
                <li>Instalar dependencias con npm o yarn.</li>
              </ol>
            </section>

            <section className="my-8">
              <h3 className="text-3xl font-semibold mb-4">Contacto</h3>
              <div className="flex flex-col items-center space-y-4">
                <p className="text-lg">
                  Para cualquier consulta, sugerencia o soporte, contáctame:
                </p>
                <div className="flex space-x-4 items-center justify-center my-4">
                  <a
                    href="mailto:da-olano@hotmail.com"
                    className="flex items-center"
                  >
                    <FaEnvelope size={30} className="mr-2" />
                    da-olano@hotmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/daniel-andres-olano-081035292/"
                    className="flex items-center"
                  >
                    <FaLinkedin size={30} className="mr-2" />
                    LinkedIn
                  </a>
                  <a href="tel:+573219702802" className="flex items-center">
                    <FaPhone size={30} className="mr-2" />
                    +57 3219702802
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
