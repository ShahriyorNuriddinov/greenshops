import Feature from "../features";
import ShopProducts from "./products";
import ShopTotal from "./total";

const ShopComponent = () => {
  return (
    <section>
      <div className="w-[90%] m-auto grid grid-cols-[3fr_1fr] gap-5 py-5">
        <ShopProducts />
        <ShopTotal />
      </div>
      <Feature />
    </section>
  );
};

export default ShopComponent;
