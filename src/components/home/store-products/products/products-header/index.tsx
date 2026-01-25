import { Select } from "antd";
import { useSearchParamsHandler } from "../../../../../hooks/useSearchParams";
import { title_category } from "../../../../../utils";

const ProductsHeader = () => {
  const { getParam, setParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;

  const handleChange = (e: string) => {
    setParam({ category, sort: e, type, range_min, range_max });
  };

  return (
    <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-4 mb-4">
      <div className="flex flex-wrap items-center gap-4">
        {title_category.map((value) => (
          <h3
            onClick={() =>
              setParam({
                category,
                sort,
                type: value.key,
                range_min,
                range_max,
              })
            }
            className={`cursor-pointer text-sm sm:text-base transition-colors hover:text-[#46A358] ${
              type === value.key ? "text-[#46A358] font-semibold" : "text-[#3D3D3D]"
            }`}
            key={value.key}
          >
            {value.title}
          </h3>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <h3 className="text-sm sm:text-base text-[#3D3D3D]">Sort by:</h3>
        <Select
          className="min-w-[160px]"
          onChange={handleChange}
          defaultValue={sort}
          options={[
            { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expensive" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProductsHeader;
