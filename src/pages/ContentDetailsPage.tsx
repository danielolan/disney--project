import React from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";

const ContentDetailsPage = () => {
  const { categoryId } = useParams();
  return <MainLayout><>content detail aaaa {categoryId}</></MainLayout>;
};

export default ContentDetailsPage;
