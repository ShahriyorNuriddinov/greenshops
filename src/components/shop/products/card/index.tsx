import { useState, useEffect } from "react";
import { DeleteFilled } from "@ant-design/icons";
import type { ProductsTypeLocal } from "../../../../@types";
import type { FC } from "react";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import {
  decreament,
  deleteData,
  increament,
} from "../../../../redux/shop-slice";

const Card: FC<ProductsTypeLocal> = (props) => {
  const dispatch = useReduxDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = () => {
    dispatch(deleteData(props._id));
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="relative my-5 bg-[#eee] p-4 flex items-center justify-between rounded-lg">
      {showAlert && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#46A358] text-white px-4 py-2 rounded-md shadow-md z-50">
          Removed from your cart!
        </div>
      )}

      <div className="flex items-center gap-4 w-[40%]">
        <img
          src={props.main_image}
          alt={props.title}
          className="w-[70px] h-[70px] object-cover rounded"
        />
        <div>
          <h3 className="text-[16px] font-medium line-clamp-1">{props.title}</h3>
          <p className="text-[14px] text-[#A5A5A5] pt-2">SKU: #{props._id}</p>
        </div>
      </div>

      <div className="text-[#727272] text-[16px] font-medium w-[15%] text-center">
        ${props.price}
      </div>

      <div className="flex items-center justify-center gap-3 w-[20%]">
        <button
          onClick={() => dispatch(decreament(props._id))}
          className="w-[30px] h-[30px] bg-[#46A358] rounded-full text-white font-bold hover:opacity-90"
        >
          -
        </button>
        <span className="text-[17px] font-medium">{props.count}</span>
        <button
          onClick={() => dispatch(increament(props._id))}
          className="w-[30px] h-[30px] bg-[#46A358] rounded-full text-white font-bold hover:opacity-90"
        >
          +
        </button>
      </div>

      <div className="text-[#727272] text-[16px] font-medium w-[15%] text-center">
        ${props.userPrice?.toFixed(2) ?? "0.00"}
      </div>

      <DeleteFilled
        onClick={handleDelete}
        className="text-[#727272] text-[20px] cursor-pointer hover:text-red-500"
      />
    </div>
  );
};

export default Card;
