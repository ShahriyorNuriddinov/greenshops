import { useState, useEffect } from "react";
import { Empty } from "antd";
import { useReduxSelector } from "../../../hooks/useRedux";
import Card from "./card";

const ShopProducts = () => {
  const { data } = useReduxSelector((state) => state.shopSlice);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  useEffect(() => {
    if (showDeleteAlert) {
      const timer = setTimeout(() => setShowDeleteAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showDeleteAlert]);

  return (
    <div className="relative">
      {showDeleteAlert && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-md shadow-md z-50">
          Deleted!
        </div>
      )}

      <div className="flex items-center justify-between text-start pb-3 border-b border-[#46A358] mb-6">
        <h2 className="text-[#3D3D3D] text-[16px] font-medium w-[40%]">Products</h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium w-[15%] text-center">Price</h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium w-[20%] text-center">Quantity</h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium w-[15%] text-center">Total</h2>
        <h2 className="text-[#3D3D3D] text-[16px] font-medium w-[5%] text-center">Delete</h2>
      </div>

      {data.length === 0 ? (
        <Empty description="No products in your cart" />
      ) : (
        data.map((item) => (
          <Card key={item._id} {...item} onDelete={() => setShowDeleteAlert(true)} />
        ))
      )}
    </div>
  );
};

export default ShopProducts;
