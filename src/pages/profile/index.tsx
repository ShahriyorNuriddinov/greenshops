import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Feature from "../../components/features";
import {
  FaUser,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaHeart,
  FaClock,
  FaSignOutAlt,
} from "react-icons/fa";
import { Upload } from "lucide-react";

interface AuthType {
  name: string;
  email: string;
}

const Profile = () => {
  const [user, setUser] = useState<Partial<AuthType>>({});
  const [activeTab, setActiveTab] = useState("profile");
  const [fileName, setFileName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("user")) {
      const data: AuthType = JSON.parse(Cookies.get("user") as string);
      setUser(data);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    Cookies.remove("user");
    navigate("/");
    window.location.reload();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="w-[90%] mx-auto mt-10 flex flex-col md:flex-row gap-6 mb-5">
        <aside className="w-full md:w-[250px] p-4 bg-white shadow-sm">
          <h2 className="text-xl font-semibold text-[#46A358] mb-4">
            My Account
          </h2>
          <ul className="flex md:flex-col gap-2">
            {[
              { key: "profile", icon: <FaUser />, label: "Account Details" },
              { key: "orders", icon: <FaBoxOpen />, label: "My Products" },
              { key: "address", icon: <FaMapMarkerAlt />, label: "Address" },
              { key: "wishlist", icon: <FaHeart />, label: "Wishlist" },
              { key: "trackOrder", icon: <FaClock />, label: "Track Order" },
            ].map(({ key, icon, label }) => (
              <li key={key}>
                <button
                  onClick={() => setActiveTab(key)}
                  className={clsx(
                    "w-full text-left px-4 py-2 rounded transition flex items-center gap-2",
                    activeTab === key
                      ? "bg-[#46A358] text-white"
                      : "hover:bg-[#46A358]/10 text-gray-800"
                  )}
                >
                  {icon}
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={handleLogout}
            className="mt-10 flex items-center text-red-600 font-medium hover:underline"
          >
            <FaSignOutAlt className="mr-2" />
            Log out
          </button>
        </aside>

        <section className="flex-1 p-6 bg-white shadow-sm">
          {activeTab === "profile" && (
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  * First name
                </label>
                <input
                  type="text"
                  defaultValue="Enter your name"
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Last name
                </label>
                <input
                  type="text"
                  defaultValue="Enter your surname"
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Email address
                </label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+998"
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Username
                </label>
                <input
                  type="text"
                  defaultValue={user.email}
                  className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 ring-[#46A358]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  * Profile photo
                </label>

                <div className="relative flex items-center gap-4">
                  <input
                    type="file"
                    id="fileUpload"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="fileUpload"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-600 rounded-lg cursor-pointer hover:bg-[#46A358] hover:border-[#46A358] hover:text-white transition"
                  >
                    <Upload size={18} />
                    Upload
                  </label>
                  {fileName && (
                    <span className="text-sm text-gray-600 truncate max-w-[200px]">
                      {fileName}
                    </span>
                  )}
                </div>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="mt-4 px-6 py-2 bg-[#46A358] text-white rounded hover:bg-green-600 transition"
                >
                  Save changes
                </button>
              </div>
            </form>
          )}

          {activeTab === "orders" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                My Products
              </h3>
              <p className="text-gray-500">You have no products yet.</p>
            </div>
          )}

          {activeTab === "address" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                My Address
              </h3>
              <p className="text-gray-500">
                Your address details will be shown here.
              </p>
            </div>
          )}

          {activeTab === "wishlist" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Wishlist
              </h3>
              <p className="text-gray-500">Your wishlist is empty.</p>
            </div>
          )}

          {activeTab === "trackOrder" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Track Order
              </h3>
              <p className="text-gray-500">No orders to track yet.</p>
            </div>
          )}
        </section>
      </div>
      <Feature />
      <Footer />
    </div>
  );
};

export default Profile;
