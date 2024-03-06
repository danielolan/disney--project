import { useEffect } from "react";
import NavBar from "../components/shared/NavBar";
import ImageDisplay from "../components/ImageDisplay";
import CategoryCard from "../components/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setCategories } from "../store/reducers/categorySlice";
import axios from "axios";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, isError, isLoading } = useSelector(
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
      <div className="flex flex-wrap p-4">
        {categories?.map((category, i) => (
          <CategoryCard
            title={category.name}
            to={`/category/${category.id}`}
            key={i}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
