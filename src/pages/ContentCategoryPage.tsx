import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Category, Movies } from "../interfaces";

const ContentCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [actualMovies, setActualMovies] = useState<Movies[]>([]);
  const { categories, isError, isLoading } = useSelector(
    (state: RootState) => state.categories
  );
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    // Si categories es un arreglo de Category y cada Category tiene un arreglo de Movies
    const categoryTemp = categories.find(
      (category) => category.id.toString() === categoryId
    );
    if (categoryTemp) {
      setCategory(categoryTemp);
      setActualMovies(categoryTemp!.movies);
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
      <img className="w-[200px] mx-auto" src={category?.thumbnail} />
      <div className="flex justify-center">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-auto">
          {" "}
          {actualMovies.length > 0 ? (
            actualMovies.map((movie) => (
              <Link
                key={movie.id}
                className="max-w-sm rounded overflow-hidden shadow-lg hover:border hover:border-white transform hover:scale-105 transition duration-300 justify-center"
                to={`/details/${category?.id}/${movie.id}`}
              >
                <img className="w-full" src={movie.url} alt={movie.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{movie.name}</div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center">No movies available</div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ContentCategoryPage;
