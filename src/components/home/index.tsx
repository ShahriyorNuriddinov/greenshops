import Cards from "../cards";
import Data from "../data";
import Feature from "../features";
import Footer from "../footer";
import Navbar from "../navbar";
import StoreProducts from "./store-products";

const HomeComponent = () => {
  return <div>
    <Navbar/>
    <Data/>
    <StoreProducts/>
    <Cards/>
    <Feature/>
    <Footer/>
  </div>;
};

export default HomeComponent;
