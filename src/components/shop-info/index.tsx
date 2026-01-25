import { useParams } from "react-router-dom";
import { useQueryHandler } from "../../hooks/useQuery";
import ShopSwiper from "./shop-swiper";
import ShopAbout from "./shop-about";
import type { DataType, ProductsType } from "../../@types";
import { Skeleton } from "antd";

const ShopInfoComponent = () => {
  const { category, id } = useParams();
  const { data, isLoading, isError }: DataType<ProductsType> = useQueryHandler({
    pathname: "shop-info",
    url: `flower/category/${category}/${id}`,
  });

  return (
    <section className="w-[90%] m-auto py-10">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <ShopSwiper isLoading={isLoading} isError={isError} data={data} />
        <ShopAbout isLoading={isLoading} isError={isError} data={data} />
      </div>

      <div>
        <div className="border-b border-green-600 mt-10 pb-5 cursor-pointer text-[18px] text-[#3d3d3d] font-bold">
          Product Description
        </div>

        {isLoading || isError ? (
          <Skeleton active />
        ) : (
          <p
            className="mt-4 text-[#3d3d3d] text-[16px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data?.description as string }}
          ></p>
        )}
      </div>
    </section>
  );
};

export default ShopInfoComponent;
