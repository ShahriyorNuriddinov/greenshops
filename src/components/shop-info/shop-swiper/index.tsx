import { useEffect, useState, type FC } from "react";
import type { DataType, ProductsType } from "../../../@types";
import { Image, Skeleton } from "antd";
import clsx from "clsx";

const ShopSwiper: FC<DataType<ProductsType>> = ({
  isError,
  isLoading,
  data,
}) => {
  const [mainUrl, setMainUrl] = useState<string>("");

  useEffect(() => {
    if (data?.main_image) setMainUrl(data.main_image);
  }, [data]);

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-5">
      <div className="flex flex-col gap-4">
        {isLoading || isError
          ? Array.from({ length: 4 }).map((_, idx) => (
              <Skeleton.Image
                key={idx}
                active
                className="!w-full !h-[150px] rounded-lg"
              />
            ))
          : data?.detailed_images.map((value) => (
              <img
                key={value}
                onClick={() => setMainUrl(value)}
                src={value}
                alt={value}
                className={clsx(
                  "w-full h-[150px] object-cover  cursor-pointer border transition",
                  mainUrl === value
                    ? "border-[#46A358] ring-2 ring-[#46A358]"
                    : "border-transparent"
                )}
              />
            ))}
      </div>

      <div>
        {isLoading || isError ? (
          <Skeleton.Image className="!w-full !h-[300px] rounded-lg" active />
        ) : (
          <Image
            src={mainUrl}
            fallback="https://via.placeholder.com/500x500?text=Image+Not+Found"
            alt="Main Product"
            className="w-full rounded-lg object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default ShopSwiper;
