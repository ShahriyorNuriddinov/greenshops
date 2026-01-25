import { noticationApi } from "../../../generic/notificationApi";
import { useAxios } from "../../useAxios";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useReduxDispatch } from "../../useRedux";
import { setAuthorizationModalVisiblity } from "../../../redux/modal-store";
import { Getuser } from "../../../redux/user-slice";


export const useLoginMutation = () => {
  const dispacht = useReduxDispatch();
  const notify = noticationApi();
  const axios = useAxios();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", method: "POST", body: data }),

    onSuccess(data) {
      notify("login");
      const { token, user } = data;
      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      dispacht(setAuthorizationModalVisiblity());
      dispacht(Getuser(user))
    },
    onError(error: { status: number }) {
      if (error.status === 409){
        notify("error")
      }
    },
  });
};
export const useRegisterMutation = () => {
  const dispacht = useReduxDispatch();
  const notify = noticationApi();
  const axios = useAxios();

  return useMutation({
    mutationKey: ["Register"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", method: "POST", body: data }),
    onSuccess(data) {
      notify("Register");
      const { token, user } = data;
      Cookies.set("token", token);
      Cookies.set("user", JSON.stringify(user));
      dispacht(setAuthorizationModalVisiblity());
      dispacht(Getuser(user))
    },
    onError(error: { status: number }) {
      if (error.status === 409){
        notify("error")
      }
    },
  });
};
export  const useOnAuthGoogle = ()=>{
  
}