import Cards from "../cards";
import Data from "../data";
import Feature from "../features";
import StoreProducts from "./store-products";

const HomeComponent = () => {
  return <div>
    <Data/>
    <StoreProducts/>
    <Cards/>
    <Feature/>
  </div>;
};

export default HomeComponent;
