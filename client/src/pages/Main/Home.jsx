import CategorySection from "@/components/Main/HomePage/CategorySection";
import Discounts from "@/components/Main/HomePage/Discounts";
import Header from "@/components/Main/HomePage/Header";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Discounts />
      <CategorySection/>
    </>
  );
};

export default Home;
