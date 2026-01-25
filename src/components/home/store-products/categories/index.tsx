import type { CategoriesType, DataType } from "../../../../@types";
import { useQueryHandler } from "../../../../hooks/useQuery";
import Discount from "../products/discount";
import Price from "./price";
import useLoader from "../../../../generic/loader";
import { useSearchParamsHandler } from "../../../../hooks/useSearchParams";
import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const Categories = () => {
  const { data, isLoading, isError }: DataType<CategoriesType[]> =
    useQueryHandler({
      pathname: "categories",
      url: "flower/category",
    });

  const { setParam, getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const { categories_loader } = useLoader();

  return (
    <div className="w-full lg:w-[310px]">
      <div className="hidden lg:block bg-[#F5F5F580] p-5 rounded">
        <h2 className="font-bold text-[#3D3D3D] text-[18px] mb-3">Categories</h2>

        {isLoading || isError
          ? categories_loader()
          : data?.map((value) => (
              <div
                key={value._id}
                onClick={() =>
                  setParam({ category: value.route_path, sort, type })
                }
                className={`flex justify-between px-2 py-2 cursor-pointer rounded text-base font-medium transition-colors ${
                  category === value.route_path
                    ? "text-[#46A358]"
                    : "text-[#3D3D3D] hover:text-[#46A358]"
                }`}
              >
                <span>{value.title}</span>
                <span>({Math.abs(value.count)})</span>
              </div>
            ))}

        <Price />
      </div>

      <div className="lg:hidden">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-between items-center bg-[#F5F5F5] p-4 text-left font-semibold text-[#3D3D3D] rounded-md shadow-sm">
                Categories
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-2 px-4 bg-[#F5F5F580] rounded shadow-inner">
                {isLoading || isError
                  ? categories_loader()
                  : data?.map((value) => (
                      <div
                        key={value._id}
                        onClick={() =>
                          setParam({ category: value.route_path, sort, type })
                        }
                        className={`flex justify-between px-2 py-2 cursor-pointer rounded text-sm font-medium transition-colors ${
                          category === value.route_path
                            ? "text-[#46A358]"
                            : "text-[#3D3D3D] hover:text-[#46A358]"
                        }`}
                      >
                        <span>{value.title}</span>
                        <span>({Math.abs(value.count)})</span>
                      </div>
                    ))}

                <Price />
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>

      <div className="mt-6">
        <Discount />
      </div>
    </div>
  );
};

export default Categories;
