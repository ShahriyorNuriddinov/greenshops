import Feature from "../../components/features";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ShopInfoComponent from "../../components/shop-info";

const ShopInfo = () => {
  return (
    <>
      <Navbar />
      <ShopInfoComponent />
      <Feature/>
      <Footer/>
    </>
  );
};

export default ShopInfo;
