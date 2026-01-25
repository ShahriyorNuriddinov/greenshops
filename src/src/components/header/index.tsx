import logo from "../../assets/svg/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import logout from "../../assets/svg/Logout.svg";
import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { setAuthorizationModalVisiblity } from "../../redux/modal-store";
const Header = () => {
  const { user, usAuth } = useReduxSelector((state) => state.userSlice);
  const dispacht = useReduxDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate()
  return (
    <div className="py-3  border-b border-[0.30px] border-solid border-[rgba(70,163,88,0.5)]">
      <div className="container justify-between flex items-center">
        <Link to={"/"}>
          {" "}
          <img src={logo} alt="" />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className={`${pathname === "/" && " border-solid  border-b-[3px] border-b-[#46a358]"} font-semibold text-base text-[#3d3d3d]`}
            to={"/"}
          >
            Home
          </Link>
          <Link
            className={`${pathname === "/blog" && " border-solid  border-b-[3px] border-b-[#46a358]"} font-semibold text-base text-[#3d3d3d]`}
            to={"/blog"}
          >
            Blog
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <FiSearch className="text-xl cursor-pointer" />
          <MdOutlineShoppingCart className="text-xl cursor-pointer" />
          <button
            onClick={() => {
              if (usAuth) {
                return navigate("/profile")
              }dispacht(setAuthorizationModalVisiblity());
            }}
            className="flex group items-center gap-2 bg-[#46a358] rounded-lg font-medium cursor-pointer text-white p-[7px_25px] "
          >
            <img
              className="group-hover:translate-x-1 duration-500"
              src={user ? "hidden" : logout}
              alt=""
            />
            {user ? user.name : "login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
