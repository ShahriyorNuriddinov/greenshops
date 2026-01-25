import { useReduxSelector } from "../../../../hooks/useRedux";

const Prices = () => {
  const { data, coupon } = useReduxSelector((state) => state.shopSlice);

  const subtotal = data.reduce((acc, item) => acc + item.userPrice, 0);
  const shipping = 16;
  const discount = (subtotal * coupon) / 100;
  const totalBeforeDiscount = subtotal + shipping;
  const totalAfterDiscount = totalBeforeDiscount - discount;

  const labelStyle = "text-[#3D3D3D] text-[18px] font-normal";
  const valueStyle = "text-[#3D3D3D] text-[18px] font-medium";

  return (
    <div className="mt-5 space-y-3">
      <div className="flex justify-between items-center">
        <h3 className={labelStyle}>Subtotal</h3>
        <h2 className={valueStyle}>${subtotal.toFixed(2)}</h2>
      </div>

      <div className="flex justify-between items-center">
        <h3 className={labelStyle}>Coupon Discount</h3>
        <h2 className="text-[#3D3D3D] text-[15px] font-medium">
          -${discount.toFixed(2)}
        </h2>
      </div>

      <div className="flex justify-between items-center">
        <h3 className={labelStyle}>Shipping</h3>
        <h2 className={valueStyle}>${shipping.toFixed(2)}</h2>
      </div>

      <div className="flex justify-between items-center mt-5">
        <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
        <div>
          {coupon ? (
            <>
              <h1 className="text-[#46A358] text-[18px] font-bold line-through">
                ${totalBeforeDiscount.toFixed(2)}
              </h1>
              <h1 className="text-[#46A358] text-[18px] font-bold">
                ${totalAfterDiscount.toFixed(2)}
              </h1>
            </>
          ) : (
            <h1 className="text-[#46A358] text-[18px] font-bold">
              ${totalBeforeDiscount.toFixed(2)}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prices;
