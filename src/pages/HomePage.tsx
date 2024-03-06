import React, { useEffect } from "react";
import NavBar from "../components/shared/NavBar";
import ImageDisplay from "../components/ImageDisplay";
import CategoryCard from "../components/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addCategory } from "../store/reducers/categorySlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Reemplaza la URL con la ruta a tu archivo JSON

        const response = await axios.get("/data/categories.json");
        //onst data = await response.json()
        console.log(response.data);
        dispatch(addCategory(...response.data));
      } catch (error) {
        console.error("Error al obtener las categorías", error);
      }
    };

    fetchData();
    console.log("algo",categories)
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <ImageDisplay
        imageUrl="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4826879538A92B52B2B316E2E9D5A1BEC5C774C094FF9F96E3265E0D4220E3E6/scale?width=1200&aspectRatio=1.78&format=webp"
        altText="Descriptive text for the image"
      />
      <div className="flex space-x-4">
        {categories?.map((category, i) => (
          <>
            
            <CategoryCard title={category.name} onClick={() => {}} key={i} />

          </>
        ))}
      </div>
    </div>
  );
};

export default Home;
