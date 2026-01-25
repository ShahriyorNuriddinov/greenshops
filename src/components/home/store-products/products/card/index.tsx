import { useState, useEffect } from "react";
import { type FC } from "react";
import type { ProductsType } from "../../../../../@types";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { getData } from "../../../../../redux/shop-slice";
import { useNavigate } from "react-router-dom";

const Card: FC<ProductsType> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    dispatch(getData(props));
    setShowAlert(true);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const iconStyle =
    "bg-white w-9 h-9 sm:w-[35px] sm:h-[35px] flex items-center justify-center rounded-lg text-lg sm:text-[20px] shadow transition hover:scale-105 cursor-pointer";

  return (
    <div className="relative border-t border-transparent hover:border-[#46A358] transition cursor-pointer">
      {showAlert && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#46A358] text-white px-4 py-2 rounded-md shadow z-10">
          Added to your shopping cart!
        </div>
      )}

      <div className="group bg-[#f5f5f5] h-[280px] sm:h-[320px] flex justify-center items-center relative">
        <img
          src={props.main_image}
          alt={props.title}
          className="w-[80%] h-[80%] object-contain"
        />

        <div className="absolute bottom-4 gap-4 sm:gap-5 hidden group-hover:flex">
          <div onClick={handleAddToCart} className={iconStyle}>
            <ShoppingCartOutlined />
          </div>
          <div className={iconStyle}>
            <HeartOutlined />
          </div>
          <div
            onClick={() =>
              navigate(`/shop-info/${props.category}/${props._id}`)
            }
            className={iconStyle}
          >
            <SearchOutlined />
          </div>
        </div>
      </div>

      <h3 className="mt-2 font-medium text-sm sm:text-base text-[#3D3D3D] line-clamp-2">
        {props.title}
      </h3>

      <div className="flex items-center gap-2 mt-1">
        <span className="text-[#46A358] font-bold text-sm sm:text-base">
          ${props.price}
        </span>
        {props.discount_price && (
          <span className="line-through text-[#A5A5A5] font-light text-sm sm:text-base">
            ${props.discount_price}
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
