import React, { useState } from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import { useMakeOrderMutation } from "../../hooks/useQueryAction";
import { notificationApi } from "../../generic/notificationApi";
import OrderConfirmationModal from '../../components/modals/order-modal/index';

const Checkout = () => {
  const { data, coupon } = useReduxSelector((state) => state.shopSlice);
  const { mutate, isPending } = useMakeOrderMutation();
  const notify = notificationApi();

  const [formData, setFormData] = useState({
    firstName: "", 
    lastName: "", 
    country: "", 
    city: "", 
    street: "", 
    stateName: "", 
    zip: "", 
    email: "", 
    phone: "", 
    paymentMethod: "cash-on-delivery" 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const required = ["firstName", "lastName", "country", "city", "street", "stateName", "zip", "email", "phone"];
    if (!required.every(key => formData[key as keyof typeof formData].trim() !== "")) {
      notify("ordererror");
      return;
    }

    const subtotal = data.reduce((acc, item) => acc + item.userPrice, 0);
    const shipping = 16;
    const discount = (subtotal * coupon) / 100;
    const total = subtotal + shipping - discount;

    mutate({
      shop_list: data,
      billing_address: { name: formData.firstName, surname: formData.lastName },
      extra_shop_info: { total, method: formData.paymentMethod }
    });
  };

  const labelStyle = "block text-[#3D3D3D] text-[15px] mb-2";
  const inputStyle = "w-full border border-[#EAEAEA] rounded-[3px] p-2.5 outline-none focus:border-[#46A358]";
  const methodClass = (method: string) => `
    flex items-center gap-3 border p-3 rounded-[3px] cursor-pointer transition-all
    ${formData.paymentMethod === method ? 'border-[#46A358]' : 'border-[#EAEAEA]'}
  `;

  return (
    <div className="max-w-[1200px] mx-auto py-10 px-5">
      <nav className="mb-10 text-[15px]"><span className="font-bold">Home</span> / Shop / Checkout</nav>

      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h2 className="text-[17px] font-bold mb-8 border-b pb-2">Billing Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className={labelStyle}>First Name <span className="text-red-500">*</span></label><input name="firstName" onChange={handleChange} className={inputStyle} type="text" /></div>
            <div><label className={labelStyle}>Last Name <span className="text-red-500">*</span></label><input name="lastName" onChange={handleChange} className={inputStyle} type="text" /></div>
            <div><label className={labelStyle}>Country / Region <span className="text-red-500">*</span></label><select name="country" onChange={handleChange} className={inputStyle}><option value="">Select country</option><option value="Uzbekistan">Uzbekistan</option></select></div>
            <div><label className={labelStyle}>Town / City <span className="text-red-500">*</span></label><input name="city" onChange={handleChange} className={inputStyle} type="text" /></div>
            <div><label className={labelStyle}>Street Address <span className="text-red-500">*</span></label><input name="street" onChange={handleChange} className={inputStyle} type="text" /></div>
            <div><label className={labelStyle}>State <span className="text-red-500">*</span></label><input name="stateName" onChange={handleChange} className={inputStyle} type="text" /></div>
            <div><label className={labelStyle}>Zip <span className="text-red-500">*</span></label><input name="zip" onChange={handleChange} className={inputStyle} type="text" /></div>
            <div><label className={labelStyle}>Email address <span className="text-red-500">*</span></label><input name="email" onChange={handleChange} className={inputStyle} type="email" /></div>
            <div><label className={labelStyle}>Phone Number <span className="text-red-500">*</span></label><input name="phone" onChange={handleChange} className={inputStyle} type="tel" /></div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <h2 className="text-[17px] font-bold mb-8">Your Order</h2>
          <div className="flex justify-between border-b pb-2 mb-4 font-medium text-[#3D3D3D]"><span>Products</span><span>Subtotal</span></div>

          <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2">
            {data.map((item) => (
              <div key={item._id} className="flex items-center justify-between bg-[#FBFBFB] p-2">
                <div className="flex items-center gap-3">
                  <img src={item.main_image} alt="" className="w-16 h-16 object-cover" />
                  <div><h4 className="font-bold text-[16px] text-[#3D3D3D]">{item.title}</h4><p className="text-[13px] text-[#A5A5A5]">SKU: {item._id.slice(-8)}</p></div>
                </div>
                <div className="text-right"><p className="text-[#A5A5A5] text-[14px]">(x {item.count})</p><p className="text-[#46A358] font-bold text-[18px]">${item.userPrice.toFixed(2)}</p></div>
              </div>
            ))}
          </div>
          <div className="space-y-3 border-b pb-5">
             <div className="flex justify-between text-[#3D3D3D] text-[15px]"><span>Subtotal</span><span className="font-bold">${data.reduce((acc, i) => acc + i.userPrice, 0).toFixed(2)}</span></div>
             <div className="flex justify-between text-[#3D3D3D] text-[15px]"><span>Shipping</span><span className="font-bold">$16.00</span></div>
             <div className="flex justify-between font-bold text-[#46A358] text-[20px] pt-4"><span>Total</span><span>${(data.reduce((acc, i) => acc + i.userPrice, 0) + 16 - (data.reduce((acc, i) => acc + i.userPrice, 0) * coupon / 100)).toFixed(2)}</span></div>
          </div>
          <div className="mt-10">
            <h3 className="text-[17px] font-bold text-[#3D3D3D] mb-4">Payment Method</h3>
            <div className="space-y-4">
              
              <label className={methodClass('paypal')}>
                <input type="radio" name="paymentMethod" value="paypal" checked={formData.paymentMethod === 'paypal'} onChange={handleChange} className="accent-[#46A358] w-4 h-4" />
                <img src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.png?alt=media&token=..." alt="payment methods" className="h-5" />
                <div className="flex gap-2 items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="paypal" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4" alt="master" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="visa" />
                </div>
              </label>
              <label className={methodClass('bank-transfer')}>
                <input type="radio" name="paymentMethod" value="bank-transfer" checked={formData.paymentMethod === 'bank-transfer'} onChange={handleChange} className="accent-[#46A358] w-4 h-4" />
                <span className="text-[15px] font-medium text-[#3D3D3D]">Direct bank transfer</span>
              </label>
              <label className={methodClass('cash-on-delivery')}>
                <input type="radio" name="paymentMethod" value="cash-on-delivery" checked={formData.paymentMethod === 'cash-on-delivery'} onChange={handleChange} className="accent-[#46A358] w-4 h-4" />
                <span className="text-[15px] font-medium text-[#3D3D3D]">Cash on delivery</span>
              </label>
            </div>

            <button 
                disabled={isPending || data.length === 0} 
                type="submit" 
                className="w-full bg-[#46A358] text-white font-bold py-4 rounded-[3px] mt-10 hover:bg-[#3b8a4a] transition-all disabled:bg-gray-400"
            >
              {isPending ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </form>
      <OrderConfirmationModal />
    </div>
  );
};

export default Checkout;