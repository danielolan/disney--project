import { useEffect } from "react";

import ImageDisplay from "../components/ImageDisplay";
import CategoryCard from "../components/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setCategories } from "../store/reducers/categorySlice";
import axios from "axios";
import "react-slideshow-image/dist/styles.css";

import { MainLayout } from "../components/layouts/MainLayout";

const HomePage = () => {
  
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state: RootState) => state.categories
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/categories.json");
        dispatch(setCategories(response.data));
      } catch (error) {
        console.error("Error al obtener las categorías", error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <ImageDisplay />
      <div className="flex flex-wrap justify-center mx-auto p-4 ">
        {categories?.map((category, i) => (
          <CategoryCard
            thumbnail={category.thumbnail}
            gifs={category.gifs}
            to={`/category/${category.id}`}
            key={i}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
