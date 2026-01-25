import type { DataType, DiscountFlowerType } from "../../../../../@types";
import { useQueryHandler } from "../../../../../hooks/useQuery";

const Discount = () => {
  const { data }: DataType<DiscountFlowerType> = useQueryHandler({
    pathname: "discount-flower",
    url: "features/discount",
  });

  return (
    <div className="w-full max-w-[310px] bg-[#eef7f1] text-center px-3 py-5 rounded-md shadow-sm">
      <h2 className="text-[#46A358] text-[24px] sm:text-[30px] font-semibold leading-[36px]">
        {data?.title || "Discount Offer"}
      </h2>

      <h3 className="text-[#3D3D3D] text-[18px] sm:text-[20px] font-bold pt-4">
        UP TO {data?.discoount_up_to || 0}% OFF
      </h3>

      {data?.poster_image_url ? (
        <img
          src={data.poster_image_url}
          alt={data?.title}
          className="w-full h-auto mt-4 rounded-md object-cover"
        />
      ) : (
        <div className="w-full h-[180px] bg-gray-200 mt-4 rounded-md flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}
    </div>
  );
};

export default Discount;
