import { useParams } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Movies } from "../interfaces";

const ContentDetailsPage = () => {
  const { movieId, categoryId } = useParams<{
    movieId: string;
    categoryId: string;
  }>();
  const { categories, isError, isLoading } = useSelector(
    (state: RootState) => state.categories
  );
  const [movies, setMovie] = useState<Movies>();

  useEffect(() => {
    const categoria = categories.find((c) => c.id.toString() === categoryId);
    if (categoria) {
      const movie = categoria.movies.find((m) => m.id.toString() === movieId);
      if (movie) {
        setMovie(movie);
      }
    }
  }, [movieId, categoryId, categories]);

  return (
    <MainLayout>
      <div className="opacity-100 min-h-screen text-white justify-center">
        {movies ? (
          <div className="flex flex-col items-center px-4 py-10">
            <h1 className="text-6xl font-bold my-4">{movies.name}</h1>
            
            <iframe
              className="w-full md:w-3/4 aspect-video mb-4"
              src={movies.video}
              title={movies.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="bg-blue-900 p-6 rounded-lg shadow-lg max-w-3xl w-full text-white">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-3xl font-bold">{movies.name}</h2>
                  <h2 className="text-xl font-semibold mb-2">{movies.subtitle}</h2>
                  <p className="text-xl mb-2">| {movies.age} |</p>
                </div>
                <div>
                  <img
                    className="w-32 h-auto"
                    src="path_to_movie_image"
                    alt=""
                  />
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Descripcion</h3>
                <p className="text-lg my-8">
                {movies.description}
                </p>

                <div className="text-sm">
                  <span className="font-semibold text-2xl my-8 ">Duración:</span><br />
                  <span className="text-xl">{movies.duration}</span><br />
                  <span className="font-semibold text-2xl my-8">Edad:</span><br />
                  <span className="text-xl">{movies.age}</span><br />
                  <span className="font-semibold text-2xl my-8">Director:</span><br />
                  <span className="text-xl">{movies.autor}</span><br />
                  <span className="font-semibold text-2xl my-8">Guionista:</span><br />
                  <span className="text-xl">{movies.slug}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-10">Película no encontrada</div>
        )}
      </div>
    </MainLayout>
  );
};

export default ContentDetailsPage;
