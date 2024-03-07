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
      <h1 className="text-center text-4xl md:text-6xl font-bold tracking-wide my-8" style={{ fontFamily: 'Your Pixar-like font here' }}>PIXAR</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {actualMovies.length > 0 ? (
          actualMovies.map((movie) => (
            <div key={movie.id} className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={movie.url} alt={movie.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{movie.name}</div>
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
