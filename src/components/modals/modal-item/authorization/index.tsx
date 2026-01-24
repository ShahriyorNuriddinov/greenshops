import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { Modal } from "antd";
import { setAuthorizationModalVisiblity } from "../../../../redux/modal-store";
import { useState } from "react";
import Login from "./login";
import Register from "./register";

const Authorization = () => {
  const { authorizationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice,
  );
  const dispacht = useReduxDispatch();
  const [state, setState] = useState<string>("login");
  return (
    <Modal
      footer={false}
      onCancel={() => dispacht(setAuthorizationModalVisiblity())}
      open={authorizationModalVisiblity}
    >
      <div className="mt-10">
        <div className="flex items-center justify-center gap-4">
          <div onClick={() => setState("login")} className={`cursor-pointer text-xl ${state === "login" && "text-green-400"}`}>Login</div>
          <div className="bg-[#3D3D3D] w-[1px] h-5"></div>
          <div onClick={() => setState("register")} className={`cursor-pointer text-xl ${state === "register" && "text-green-400"}`} >Register</div>
        </div>
         {state === "login" ? <Login/> : <Register/>}
      </div>
    </Modal>
  );
};

export default Authorization;
