import { useDispatch } from "react-redux";
import { useReduxSelector } from "../../../hooks/useRedux";
import { setOpenOrderModal } from "../../../redux/modal-slice";
import { Link, Navigate } from "react-router-dom";

const OrderConfirmationModal = () => {
  const dispatch = useDispatch();
  const { openOrderModal, orderData } = useReduxSelector((state) => state.modalSlice);
  if (!openOrderModal || !orderData) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-[580px] rounded-sm shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="bg-[#46A3581A] py-10 flex flex-col items-center border-b-[1.5px] border-[#46A35833] relative">
          <button onClick={() => dispatch(setOpenOrderModal(false))} className="absolute top-4 right-4 text-[#46A358] text-xl font-bold">✕</button>
          
          <p className="text-[#727272] text-[16px]">Your order has been received</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-4 gap-4 border-b pb-5 mb-6 text-[14px]">
              <div><p className="text-[#727272] mb-1">Order Number</p><p className="font-bold text-[#3D3D3D]">{orderData._id?.slice(-13)}</p></div>
            <div><p className="text-[#727272] mb-1">Order Number</p><p className="font-bold text-[#3D3D3D]">{orderData._id?.slice(-8)}</p></div>
            <div><p className="text-[#727272] mb-1">Date</p><p className="font-bold text-[#3D3D3D]">{new Date(orderData.created_at).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'})}</p></div>
            <div><p className="text-[#727272] mb-1">Total</p><p className="font-bold text-[#3D3D3D]">${orderData.extra_shop_info?.total?.toFixed(2)}</p></div>
            <div><p className="text-[#727272] mb-1">Payment Method</p><p className="font-bold text-[#3D3D3D] uppercase">{orderData.extra_shop_info?.method?.replace(/-/g, ' ')}</p></div>
          </div>

          <h3 className="text-[16px] font-bold text-[#3D3D3D] mb-4">Order Details</h3>
          
          <div className="max-h-[200px] overflow-y-auto mb-6 pr-2 space-y-3 custom-scroll">
            {orderData.shop_list?.map((item: any) => (
              <div key={item._id} className="flex justify-between items-center bg-[#FBFBFB] p-2">
                <div className="flex items-center gap-4">
                  <img src={item.main_image} alt="" className="w-14 h-14 object-cover" />
                  <div>
                    <p className="font-bold text-[14px] text-[#3D3D3D]">{item.title}</p>
                    <p className="text-[12px] text-[#A5A5A5]">SKU: {item._id.slice(-8)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#727272] text-[14px]">(x {item.count})</p>
                  <p className="font-bold text-[#46A358]">${(item.price * item.count).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-3 mb-8">
            <div className="flex justify-between text-[15px] text-[#3D3D3D]"><span>Shipping</span><span className="font-bold">$16.00</span></div>
            <div className="flex justify-between font-bold text-[18px] text-[#3D3D3D]"><span>Total</span><span className="text-[#46A358]">${orderData.extra_shop_info?.total?.toFixed(2)}</span></div>
          </div>

       <Link to="/">
          <button onClick={() => dispatch(setOpenOrderModal(false))}  className="w-full bg-[#46A358] text-white py-4 rounded-[3px] font-bold hover:bg-[#3b8a4a] transition-all">
            Track your order
          </button>
       </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;