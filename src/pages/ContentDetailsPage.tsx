import { useParams } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout"
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const ContentDetailsPage = () => {
  const {movieId , categoryId} = useParams<{ movieId: string ,categoryId: string}>();
  const { categories, isError, isLoading } = useSelector(
    (state: RootState) => state.categories
  );
  useEffect(() => {
  //DEBE BUSCAR la categoria por id y despues la movie por el id si la pelicula existe guardelo en un usestate que se llame pelicula 
  }, [])
  
  

  return (
    <MainLayout>
      <>
      hola{movieId}/{categoryId}
      </>
    </MainLayout>
  )
}

export default ContentDetailsPage
