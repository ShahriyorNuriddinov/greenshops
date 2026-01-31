import { Skeleton } from "antd";

const useLoader = () => {
  const categories_loader = () => (
    <div className="flex flex-col gap-3">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Skeleton.Input key={idx} active block size="default" />
      ))}
    </div>
  );

  const products_loader = () => (
    <div className="grid grid-cols-2 gap-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx}>
          <Skeleton.Image active className="!w-full !h-[250px]" />
          <Skeleton.Input active block size="small" className="mt-2" />
        </div>
      ))}
    </div>
  );

  const orders_loader = () => (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div key={idx} className="flex justify-between items-center bg-[#FBFBFB] p-5 rounded-lg">
          <div className="flex-[2] pr-4"><Skeleton.Input active size="small" block /></div>
          <div className="flex-1 flex justify-center"><Skeleton.Input active size="small" className="!w-20" /></div>
          <div className="flex-1 flex justify-center"><Skeleton.Input active size="small" className="!w-16" /></div>
          <div className="w-24 flex justify-end"><Skeleton.Button active size="small" className="!w-16" /></div>
        </div>
      ))}
    </div>
  );

  return { categories_loader, products_loader, orders_loader };
};

export default useLoader;