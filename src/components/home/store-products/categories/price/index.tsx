import { Slider } from "antd";
import { useState } from "react";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";

const Price = () => {
  const { getParam, setParam } = useSearchParamsHandler();

  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";

  const [price, setPrice] = useState<[number, number]>([
    Number(range_min),
    Number(range_max),
  ]);

  const setPriceFilter = () => {
    setParam({
      category,
      sort,
      type,
      range_min: price[0],
      range_max: price[1],
    });
  };

  return (
    <div className="mt-6 px-2 sm:px-0">
      <h2 className="text-lg font-semibold text-[#3D3D3D] mb-2">Filter by Price</h2>
      <Slider
        range
        step={1}
        max={1000}
        min={0}
        defaultValue={price}
        onChange={(e) => setPrice(e as [number, number])}
        trackStyle={[{ backgroundColor: "#46A358" }]}
        handleStyle={[
          { borderColor: "#46A358", backgroundColor: "#46A358" },
          { borderColor: "#46A358", backgroundColor: "#46A358" },
        ]}
      />

      <p className="mt-2 text-sm font-medium text-[#46A358]">
        Price range: <span className="font-bold">${price[0]} - ${price[1]}</span>
      </p>

      <button
        onClick={setPriceFilter}
        className="mt-4 w-full sm:w-[130px] bg-[#46A358] hover:bg-[#3d8e47] transition text-white font-semibold py-2 rounded-md"
      >
        Apply Filter
      </button>
    </div>
  );
};

export default Price;
