import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Movies } from "../interfaces";

const ContentCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [actualMovies, setActualMovies] = useState<Movies[]>([]);
  const { categories, isError, isLoading } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    // Si categories es un arreglo de Category y cada Category tiene un arreglo de Movies
    const category = categories.find((category) => category.id.toString() === categoryId);
    if (category) {
      setActualMovies(category.movies);
    }
  }, [categories, categoryId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4">
        {actualMovies.length > 0 ? (
          actualMovies.map((movie) => (
            <div key={movie.id} className="bg-white shadow-xl rounded-lg overflow-hidden mb-4">
              <img src={movie.url} alt={movie.name} className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h2 className="text-2xl font-bold">{movie.name}</h2>
                <p className="mt-1">{movie.description}</p>
                <p className="mt-4"><strong>Duration:</strong> {movie.duration}</p>
                <p className="mt-1"><strong>Author:</strong> {movie.autor}</p>
              </div>
              <div className="flex justify-center mt-4 mb-8">
                <a href={"/details"}  rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View More
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No movies available</div>
        )}
      </div>
    </MainLayout>
  );
};


export default ContentCategoryPage;
