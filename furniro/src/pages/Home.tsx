import React from "react";
import HeaderHome from "../components/HeaderHome";
import CategorySection from "../components/CategorySection";
import Benefits from "../components/AdvantagesSection";
import Footer from "../components/Footer";
import ProductsSection from "../components/ProductsSection";
import { Link } from "react-router-dom";
import './home.css';

const Home: React.FC = () => {
  return (
    <div>
      <HeaderHome />
      <CategorySection />
      <h2 className="products-heading">Our Products</h2>
      <ProductsSection limit={8} />
      <div className="show-more-container">
        <Link className="load-more-button" to={"/shop"}>
          Show More
        </Link>
      </div>
      <Benefits />
      <Footer />
    </div>
  );
};
export default Home;
