import { Modal } from "antd";
import { useReduxSelector } from "../../../hooks/useRedux";
import { useDispatch } from "react-redux";
import { setOpenAuthoritastionModalVisiblity } from "../../../redux/modal-slice";
import Login from "./login";
import Register from "./register";
import { useState } from "react";

const AuthorisationModal = () => {
  const { openAuthorisationModalVisiblty } = useReduxSelector(
    (state) => state.modalSlice
  );

  const dispatch = useDispatch();
  const [editPage, setEditPage] = useState<"login" | "register">("login");

  return (
    <Modal
      open={openAuthorisationModalVisiblty}
      footer={false}
      width={500}
      onCancel={() => dispatch(setOpenAuthoritastionModalVisiblity())}
      destroyOnClose
      centered
    >
      <div className="px-5 pt-2 pb-6">
        <div className="flex justify-center gap-5 border-b border-gray-200 mb-6">
          {["login", "register"].map((page) => (
            <button
              key={page}
              onClick={() => setEditPage(page as "login" | "register")}
              className={`text-lg font-semibold pb-2 transition-all ${
                editPage === page
                  ? "text-[#46A358] border-b-2 border-[#46A358]"
                  : "text-gray-500 hover:text-[#46A358]"
              }`}
            >
              {page === "login" ? "Login" : "Register"}
            </button>
          ))}
        </div>

        {editPage === "login" ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthorisationModal;
