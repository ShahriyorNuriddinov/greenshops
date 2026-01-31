import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { FaUser, FaBoxOpen,FaBloggerB , FaClock, FaSignOutAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { setOpenDeleteOrderModal, setOrderData } from "../../redux/modal-slice";
import { logout } from "../../redux/user-slice";
import { useGetOrdersQuery, useUpdateUserMutation } from "../../hooks/useQueryAction"; 
import useLoader from "../../generic/loader";
import DeleteOrderModal from "../../components/modals/delete-modal";
import PostBlog from "../../components/Blog";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const [activeTab, setActiveTab] = useState("profile"); 

  const { user } = useReduxSelector((state) => state.userSlice);
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateUserMutation();
  const { data: orders, isLoading: isOrdersLoading } = useGetOrdersQuery();
  const { orders_loader } = useLoader();

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone_number: "", username: "", profile_photo: "", newPassword: "", confirmPassword: ""
  });

  const [showPass, setShowPass] = useState({ new: false, confirm: false });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.name || "",
        lastName: user.surname || "",
        email: user.email || "",
        username: user.username || user.email?.split('@')[0] || "",
        phone_number: user.phone_number || "",
        profile_photo: user.profile_photo || "https://via.placeholder.com/150"
      }));
    } else if (!Cookies.get("user")) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!user?._id) return alert("User ID missing!");
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const payload = {
      _id: user._id,
      name: formData.firstName,
      surname: formData.lastName,
      email: formData.email,
      username: formData.username, 
      phone_number: formData.phone_number, 
      profile_photo: formData.profile_photo, 
      ...(formData.newPassword && { password: formData.newPassword })
    };

    updateProfile(payload);
  };

  const labelStyle = "block text-sm font-medium text-[#3D3D3D] mb-1.5";
  const inputStyle = "w-full border border-[#EAEAEA] rounded-md px-4 py-2.5 outline-none focus:border-[#46A358]";

  return (
    <div className="bg-white min-h-screen">
      <div className="w-[90%] mx-auto mt-10 flex flex-col md:flex-row gap-10 mb-20">
        <aside className="w-full md:w-[280px] bg-[#FBFBFB] p-4 h-fit border border-[#EAEAEA]">
          <h2 className="text-xl font-bold mb-6 px-4">My Account</h2>
          <ul className="space-y-1">
            {[{ key: "profile", icon: <FaUser />, label: "Account Details" },
              { key: "orders", icon: <FaBoxOpen />, label: "Orders" },
              { key: "trackOrder", icon: <FaClock />, label: "Track Order" },
                { key: "post", icon: <FaBloggerB />, label: "Post your blog" }
            ].map(({ key, icon, label }) => (
              <li key={key}>
                <button onClick={() => setActiveTab(key)} className={clsx("w-full text-left px-4 py-3 flex items-center gap-3 font-medium border-l-[4px]", activeTab === key ? "bg-white text-[#46A358] border-[#46A358]" : "text-[#727272] border-transparent hover:text-[#46A358]")}>
                  {icon} {label}
                </button>
              </li>
            ))}
          </ul>
          <button onClick={() => dispatch(logout())} className="mt-10 px-4 py-3 flex items-center text-red-500 font-bold border-t w-full border-[#EAEAEA]"><FaSignOutAlt className="mr-3" /> Logout</button>
        </aside>

        <section className="flex-1">
          {activeTab === "profile" && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-[18px] font-bold mb-6">Personal Information</h2>
              <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                  <div><label className={labelStyle}>First Name *</label><input name="firstName" value={formData.firstName} onChange={handleChange} className={inputStyle} type="text" required /></div>
                  <div><label className={labelStyle}>Last Name *</label><input name="lastName" value={formData.lastName} onChange={handleChange} className={inputStyle} type="text" required /></div>
                  <div><label className={labelStyle}>Email address *</label><input name="email" value={formData.email} onChange={handleChange} className={inputStyle} type="email" required /></div>
                  <div><label className={labelStyle}>Phone Number *</label><input name="phone_number" value={formData.phone_number} onChange={handleChange} className={inputStyle} type="tel" required /></div>
                  <div><label className={labelStyle}>Username *</label><input name="username" value={formData.username} onChange={handleChange} className={inputStyle} type="text" required /></div>
                  <div><label className={labelStyle}>Photo URL *</label><input name="profile_photo" value={formData.profile_photo} onChange={handleChange} className={inputStyle} type="text" required /></div>
                </div>
                <button type="submit" disabled={isUpdating} className="mt-10 bg-[#46A358] text-white px-10 py-3 rounded-md font-bold hover:bg-[#3b8a4a] transition-all disabled:bg-gray-400">{isUpdating ? "Saving..." : "Save Change"}</button>
              </form>
            </div>
          )}    
            {activeTab === "post" && <PostBlog/>}
            {activeTab === "orders" && (
  <div className="animate-in fade-in duration-500">
    <h2 className="text-[22px] font-bold text-[#3D3D3D] mb-8">My Products</h2>

    <div className="mt-5">
      {false ? (
        orders_loader() 
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-[#FBFBFB] rounded-lg border border-dashed border-gray-300">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-300 text-5xl">
            <FaBoxOpen />
          </div>
          <h3 className="text-[20px] font-bold text-[#3D3D3D] mb-2">Mahsulotlar mavjud emas</h3>
          <p className="text-[#727272] text-[14px] mb-8 text-center max-w-[350px] leading-relaxed">
            Siz hali biron bir mahsulotni sotuvga qo'ymagansiz.
          </p>
          <button 
            onClick={() => navigate("/")}
            className="bg-[#46A358] text-white px-10 py-3 rounded-md font-bold hover:bg-[#3d8f4d] transition-all shadow-md active:scale-95"
          >
            Mahsulotlarni ko'rish
          </button>
        </div>
      )}
    </div>
  </div>
)}

     {activeTab === "trackOrder" && (
  <div className="animate-in slide-in-from-right duration-500">
    <h2 className="text-[22px] font-bold mb-8 text-[#3D3D3D]">Track your Orders</h2>
    
    {orders && orders.length > 0 && !isOrdersLoading && (
      <div className="flex justify-between items-center px-6 pb-3 border-b border-[#46A35833] font-bold text-[#3D3D3D]">
        <span className="flex-[2]">Order Number</span>
        <span className="flex-1 text-center">Date</span>
        <span className="flex-1 text-center">Total</span>
        <span className="w-24 text-right">More</span>
      </div>
    )}

    <div className="mt-5 space-y-4">
      {isOrdersLoading ? (
        orders_loader()
      ) : orders && orders.length > 0 ? (
        orders.map((order: any) => (
          <div 
            key={order._id} 
            className="flex justify-between items-center bg-[#FBFBFB] p-5 rounded-lg border border-transparent hover:border-[#46A35833] transition-all shadow-sm"
          >
            <span className="flex-[2] text-[#727272] truncate pr-4" title={order._id}>{order._id}</span>
            <span className="flex-1 text-center font-bold text-[#3D3D3D]">{order.created_at?.slice(0, 10)}</span>
            <span className="flex-1 text-center font-bold text-[#46A358]">$ {order.extra_shop_info?.total?.toFixed(2)}</span>
            <button 
              onClick={() => { 
                dispatch(setOrderData(order)); 
                dispatch(setOpenDeleteOrderModal({ open: true, id: order._id })); 
              }} 
              className="w-24 text-right text-[#46A358] font-medium hover:underline"
            >
              More info
            </button>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-[#FBFBFB] rounded-lg border border-dashed border-gray-300">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FaClock className="text-4xl text-gray-300" />
          </div>
          <h3 className="text-[18px] font-bold text-[#3D3D3D] mb-2">Buyurtmalar topilmadi</h3>
          <p className="text-[#727272] text-sm mb-6 text-center max-w-[300px]">
            Hozircha sizda hech qanday buyurtma mavjud emas. 
          </p>
          <button 
            onClick={() => navigate("/")}
            className="bg-[#46A358] text-white px-8 py-2.5 rounded-md font-bold hover:bg-[#3d8f4d] transition-all active:scale-95"
          >
            Do'konga o'tish
          </button>
        </div>
      )}
    </div>
  </div>
)}
        </section>
      </div>
      <DeleteOrderModal />
    </div>
  );
};

export default Profile;