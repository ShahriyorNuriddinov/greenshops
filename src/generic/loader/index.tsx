import { Skeleton } from "antd";

const useLoader = () => {
  const categories_loader = () => {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Skeleton.Input key={idx} active size="default" />
        ))}
      </div>
    );
  };
  const products_loader = () => {
    return Array.from({ length: 6 }).map((_, idx) => (
      <div key={idx}>
        <Skeleton.Image active className="!w-full !h-[300px]" />
        <Skeleton.Input active/>
      </div>
    ));
  };
  return { categories_loader,  products_loader };
};

export default useLoader;
