import type { FC } from "react";
import type { AuthType, DataType, ProductsType } from "../../../@types";
import { Avatar, Rate, Skeleton, Tooltip } from "antd";
import { useQueryHandler } from "../../../hooks/useQuery";
import { useReduxDispatch } from "../../../hooks/useRedux";
import { getData } from "../../../redux/shop-slice";

const ShopAbout: FC<DataType<ProductsType>> = ({
  data,
  isError,
  isLoading,
}) => {
  const {
    data: userData,
    isError: userError,
    isLoading: userLoading,
  }: DataType<AuthType> = useQueryHandler({
    pathname: "user",
    url: `user/by_id/${data?.created_by}`,
  });
  const dispatch = useReduxDispatch();
  return (
    <div>
      <div className="border-b border-green-600 flex items-center justify-between pb-5">
        <div className="flex items-center gap-5">
          {userLoading || userError ? (
            <Skeleton.Image
              active
              className="!h-[60px] !w-[60px] !rounded-full"
            />
          ) : (
            <Tooltip title={userData?.name + " " + userData?.surname}>
              <Avatar
                src={userData?.profile_photo}
                className="!w-[60px] !h-[60px]"
              />
            </Tooltip>
          )}
          <div>
            {isLoading || isError ? (
              <div className="flex flex-col gap-4">
                <Skeleton.Input active />
                <Skeleton.Input active />
              </div>
            ) : (
              <div>
                {" "}
                <h2 className="text-[#3D3D3D] text-[25px] font-bold max-[1150px]:text-[18px]">
                  {data?.title}
                </h2>
                <h2 className="text-[#46A358] text-[20px] font-bold max-[350px]:text-[16px]">
                  $ {data?.price}
                </h2>
              </div>
            )}
          </div>
        </div>
        <div>
          <Rate value={data?.rate} />
          <p>{data?.views} customer review</p>
        </div>
      </div>

      <div className="my-5">
        <h2 className="text-[#3D3D3D] text-[20px] font-medium mb-4">
          Short Description
        </h2>
        {isLoading || isError ? (
          <Skeleton active />
        ) : (
          <p>{data?.short_description}</p>
        )}
      </div>

      <div>
        <h2>Size:</h2>
        <div className="flex items-center gap-5 mt-4">
          <button className="w-[22px] h-[22px] flex justify-center items-center border border-[#EAEAEA] rounded-full hover:border-[#46A358] transition-colors font-medium text-[12px] p-3">
            S
          </button>
          <button className="w-[22px] h-[22px] flex justify-center items-center border border-[#EAEAEA] rounded-full hover:border-[#46A358] transition-colors font-medium text-[12px] p-3">
            W
          </button>
          <button className="w-[22px] h-[22px] flex justify-center items-center border border-[#EAEAEA] rounded-full hover:border-[#46A358] transition-colors font-medium text-[12px] p-3">
            L
          </button>
          <button className="w-[22px] h-[22px] flex justify-center items-center border border-[#EAEAEA] rounded-full hover:border-[#46A358] transition-colors font-medium text-[12px] p-3">
            XL
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 max-[400px]:flex-col max-[400px]:items-start mt-5">
        <button className="bg-[#46A358] flex rounded-md items-center justify-center text-white w-[130px] h-[35px] max-w-[400px]:w-full">
          BUY NOW
        </button>

        <button
          onClick={() => dispatch(getData(data))}
          className="bg-transperent border border-[#46A358] flex rounded-md items-center justify-center text-[#46A358] h-[35px] w-[130px]"
        >
          Add to Card
        </button>

        <button className="bg-transparent border border-[#46A358] flex rounded-md items-center justify-center text-[#46A358] h-[35px] w-[35px]">
          <span role="img" aria-label="heart" className="anticon anticon-heart">
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              data-icon="heart"
              width="1.5em"
              height="1.5em"
              fill="none"
              stroke="currentColor"
              strokeWidth="50"
              aria-hidden="true"
            >
              <path d="M923 283.3c0-52.9-20.6-102.7-58-140.1s-87.2-58-140.1-58c-66.4 0-126.3 31.1-165.9 80.4C519.3 116.3 459.4 85.2 393 85.2c-52.9 0-102.7 20.6-140.1 58s-58 87.2-58 140.1c0 66.9 29.4 129.3 81.4 172.3l268.3 231.9c6 5.2 15 5.2 21 0l268.3-231.9c52-43 81.4-105.4 81.4-172.3z" />
            </svg>
          </span>
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-5">
        <div className="text-[#727272] text-[13px] font-normal">
          <span className="text-[#A5A5A5] pr-2">SKU: </span>
          {data?._id}
        </div>
        <div className="text-[#727272] text-[13px] font-normal">
          <span className="text-[#A5A5A5] pr-2">Catgegories: </span>
          {data?.category}
        </div>
        <div className="text-[#727272] text-[13px] font-normal">
          <span className="text-[#A5A5A5] pr-2">Tags: </span>
          {data?.tags.join() || "Home, Garden Plants"}
        </div>
      </div>
    </div>
  );
};

export default ShopAbout;
