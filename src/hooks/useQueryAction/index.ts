import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAxios } from "../useAxios";
import Cookies from "js-cookie";
import type { AuthType } from "../../@types";
import { useDispatch } from "react-redux";
import { setOpenAuthoritastionModalVisiblity, setOpenOrderModal, setOrderData } from "../../redux/modal-slice";
import { notificationApi } from "../../generic/notificationApi";
import { signInWithGoogle } from "../../config";
import { clearCart, getCoupon } from "../../redux/shop-slice";
import { useReduxDispatch } from "../../hooks/useRedux";
import { getUser } from "../../redux/user-slice";


export const useLoginMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: { email: string; password: string }) =>
      axios({
        url: "user/sign-in",
        method: "POST",
        body: data,
      }),

    onSuccess: (data: { token: string; user: AuthType }) => {
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      notify("login");
      dispatch(setOpenAuthoritastionModalVisiblity()); 
   dispatch(getUser(data.user)); 
    },
    onError: () => {
      notify("409");
    },
  });
};

export const useRegisterMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: object) =>
      axios({
        url: "user/sign-up",
        method: "POST",
        body: data,
      }),

    onSuccess: (data: { token: string; user: AuthType }) => {
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      notify("register");
      dispatch(setOpenAuthoritastionModalVisiblity());
       dispatch(getUser(data.user)); 
    },
    onError: (error: { status: number }) => {
      if (error.status === 406) {
        notify("409");
      }
    },
  });
};

export const useRegisterWithGoogleMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationKey: ["register-google"],
    mutationFn: async () => {
      const response = await signInWithGoogle();

      return axios({
        url: "user/sign-up/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },

    onSuccess: (data: { token: string; user: AuthType }) => {
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      notify("login");
      dispatch(setOpenAuthoritastionModalVisiblity());
      console.log(data);
       dispatch(getUser(data.user)); 
    },
    onError: (error: { status: number }) => {
      console.log(error);

      if (error.status === 409) {
        notify("409");
      }
    },
  });
};

export const useLoginWithGoogleMutation = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async () => {
      const response = await signInWithGoogle();
      return axios({
        url: "user/sign-in/google",
        method: "POST",
        body: { email: response.user.email },
      });
    },

    onSuccess: (data: { token: string; user: AuthType }) => {
      Cookies.set("token", data.token);
      Cookies.set("user", JSON.stringify(data.user));
      notify("login");
      dispatch(setOpenAuthoritastionModalVisiblity());
      console.log(data);
       dispatch(getUser(data.user)); 
    },
    onError: () => {
      notify("409");
    },
  });
};

/*export const useGetCoupon = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  return useMutation({ 
    mutationKey: ["coupon"],
    mutationFn: (coupon_code: string) =>
      axios({
        url: "faetures/coupon",
        params: { coupon_code },
      }),
    onSuccess(data) {
      dispatch(getCoupon(data.discount_for));
    },
  });
};*/

export const useGetCoupon = () => {
  const axios = useAxios();
  const dispatch = useDispatch();
  return useMutation({ 
    mutationKey: ["coupon"],
    mutationFn: (coupon_code: string) =>
      axios({
        url: "faetures/coupon",
        params: { coupon_code },
      }),
    onSuccess(data) {
      dispatch(getCoupon(data.discount_for));
    },
  });
};
export const useMakeOrderMutation = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const dispatch = useDispatch();

  return useMutation({
    mutationKey: ["make-order"],
    mutationFn: (body: object) =>
      axios({
        url: "order/make-order",
        method: "POST",
        body,
      }),
    onSuccess: (res) => {
       dispatch(clearCart()); 
      dispatch(setOrderData(res)); 
      dispatch(setOpenOrderModal(true)); 
      notify("order"); 
      localStorage.removeItem("shop"); 
    },
    onError: () => notify("error"),
  });
};
export const useGetOrdersQuery = () => {
  const axios = useAxios();

  return useQuery({
    queryKey: ["get-orders"],
    queryFn: () =>
      axios({
        url: "order/get-order", 
        method: "GET",
      }),
    refetchOnWindowFocus: false, 
  });
};
export const useDeleteOrderMutation = () => {
  const axios = useAxios();
  const notify = notificationApi();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["delete-order"],
    mutationFn: (id: string) =>
      axios({
        url: "order/delete-order",
        method: "DELETE",
        body: { _id: id }, 
      }),
    onSuccess: () => {
      notify("order-delete"); 
      queryClient.invalidateQueries({ queryKey: ["get-orders"] });
    },
    onError: () => notify("error"),
  });
};
export const useUpdateUserMutation = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const notify = notificationApi();

  return useMutation({
    mutationFn: (data: object) =>
      axios({
        url: "user/account-details",
        method: "POST",
        body: data,
      }),
    onSuccess: (res) => {
      if (res && res._id) {
        dispatch(getUser(res));
        notify("new"); 
      } else {
        console.error("Backenddan noto'g'ri formatda ma'lumot keldi:", res);
      }
    },
    onError: (err: any) => {
      console.error("Update xatosi:", err.response?.data);
      notify("error");
    },
  });
};