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
  const [movies, setMovie] = useState(null); // Estado para almacenar la película

  useEffect(() => {
    // Encuentra la categoría por ID
    const categoria = categories.find((c) => c.id.toString() === categoryId);

    // Si la categoría existe, busca la película por ID
    if (categoria) {
      const movie = categoria.movies.find((m) => m.id.toString() === movieId);

      // Si la película existe, actualiza el estado
      if (movie) {
        setMovie(movie);
      }
    }
  }, [movieId, categoryId, categories]);

  return (
    <MainLayout>
      <div className="bg-transparent">
        {movies ? (
          <div className="justify-center">
            <h1 className="text-2xl font-bold">{movies.name}</h1>
            <p className="text-md">{movies.subtitle}</p>
            {/*<img className="w-full" src={movies.url} alt={movies.name} />*/}
            <p className="text-sm">{movies.description}</p>
            <div className="text-sm">
              <span>Duración: {movies.duration}</span> |{" "}
              <span>Edad: {movies.age}</span> |{" "}
              <span>Autor: {movies.autor}</span>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              <span className="material-icons">play_arrow</span>
              <span>VER AHORA</span>
            </button>
          </div>
        ) : (
          <div>Película no encontrada</div>
        )}
      </div>
    </MainLayout>
  );
};

export default ContentDetailsPage;
