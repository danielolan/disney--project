import { useParams } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const ContentDetailsPage = () => {
  const { movieId, categoryId } = useParams<{
    movieId: string;
    categoryId: string;
  }>();
  const { categories, isError, isLoading } = useSelector(
    (state: RootState) => state.categories
  );
  const [movies, setMovie] = useState(null);

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
            <h1 className="text-4xl font-bold mb-4">{movies.name}</h1>
            <iframe
              className="w-full md:w-3/4 aspect-video mb-4"
              src={movies.video}
              title={movies.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
              <p className="text-lg">{movies.subtitle}</p>
              <p className="text-md my-2">{movies.description}</p>
              <div className="text-sm mb-4">
                <span>Duración: {movies.duration}</span> |{" "}
                <span>Edad: {movies.age}</span> |{" "}
                <span>Autor: {movies.autor}</span>
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
