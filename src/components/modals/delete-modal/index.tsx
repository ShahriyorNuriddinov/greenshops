import { useDispatch } from "react-redux";
import { useReduxSelector } from "../../../hooks/useRedux";
import { setOpenDeleteOrderModal } from "../../../redux/modal-slice";
import { useDeleteOrderMutation } from "../../../hooks/useQueryAction";

const DeleteOrderModal = () => {
  const dispatch = useDispatch();
  const { openDeleteOrderModal, deleteOrderId, orderData } = useReduxSelector((state) => state.modalSlice);
  const { mutate, isPending } = useDeleteOrderMutation();

  if (!openDeleteOrderModal || !orderData) return null;
  const handleDelete = () => {
    if (deleteOrderId) {
      mutate(deleteOrderId, {
        onSuccess: () => {
          dispatch(setOpenDeleteOrderModal({ open: false }));
        }
      });
    }
  };

  const handleClose = () => {
    dispatch(setOpenDeleteOrderModal({ open: false }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-[580px] rounded-sm shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <div className="bg-red-50 py-10 flex flex-col items-center border-b-[1.5px] border-red-100 relative">
          <button 
            onClick={handleClose} 
            className="absolute top-4 right-4  text-xl font-bold "
          >
            ✕
          </button>
        <p>More info Proucts</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-4 gap-4 border-b pb-5 mb-6 text-[14px]">
            <div><p className="text-[#727272] mb-1 text-[12px]">Order Number</p><p className="font-bold text-[#3D3D3D]">{orderData._id?.slice(-8)}</p></div>
            <div><p className="text-[#727272] mb-1 text-[12px]">Date</p><p className="font-bold text-[#3D3D3D]">{new Date(orderData.created_at).toLocaleDateString('en-GB')}</p></div>
            <div><p className="text-[#727272] mb-1 text-[12px]">Total</p><p className="font-bold text-[#3D3D3D]">${orderData.extra_shop_info?.total?.toFixed(2)}</p></div>
            <div><p className="text-[#727272] mb-1 text-[12px]">Method</p><p className="font-bold text-[#3D3D3D] uppercase text-[12px]">{orderData.extra_shop_info?.method?.replace(/-/g, ' ')}</p></div>
          </div>

          <h3 className="text-[16px] font-bold text-[#3D3D3D] mb-4">Items to be deleted:</h3>
          <div className="max-h-[180px] overflow-y-auto mb-6 pr-2 space-y-3 custom-scroll">
            {orderData.shop_list?.map((item: any) => (
              <div key={item._id} className="flex justify-between items-center bg-[#FBFBFB] p-2 rounded">
                <div className="flex items-center gap-4">
                  <img src={item.main_image} alt="" className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="font-bold text-[14px] text-[#3D3D3D]">{item.title}</p>
                    <p className="text-[12px] text-[#A5A5A5]">Quantity: {item.count}</p>
                  </div>
                </div>
                <p className="font-bold text-gray-700">${(item.price * item.count).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 space-y-3 mb-8">
            <div className="flex justify-between font-bold text-[18px] text-[#3D3D3D]">
              <span>Final Total</span>
              <span className="text-red-500">${orderData.extra_shop_info?.total?.toFixed(2)}</span>
            </div>
          </div>
          <button 
            onClick={handleDelete}
            disabled={isPending}
            className="w-full py-4 bg-red-500 text-white rounded-[3px] font-bold hover:bg-red-600 transition-all disabled:bg-red-300 shadow-md"
          >
            {isPending ? "Processing..." : "Delete Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;