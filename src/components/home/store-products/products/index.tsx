import type { DataType, ProductsType } from "../../../../@types";
import useLoader from "../../../../generic/loader";
import { useQueryHandler } from "../../../../hooks/useQuery";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";
import Card from "./card";
import ProductsHeader from "./products-header";

const Products = () => {
  const { getParam } = useSearchParamsHandler();

  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;

  const { data, isLoading, isError }: DataType<ProductsType[]> =
    useQueryHandler({
      pathname: `products-${category}-${sort}-${type}-min-${range_min}-max-${range_max}`,
      url: `flower/category/${category}`,
      params: {
        type,
        sort,
        range_min,
        range_max,
      },
    });

  const { products_loader } = useLoader();

  return (
    <div className="w-full">
      <ProductsHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-5 min-h-[300px]">
        {isLoading || isError
          ? products_loader()
          : data?.map((value) => <Card key={value._id} {...value} />)}
      </div>
    </div>
  );
};

export default Products;
