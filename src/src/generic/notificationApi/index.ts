import toast from "react-hot-toast";

type NotificationType = "login" | "error" | "confirm_password" | "Register";
export const noticationApi = () => {
  const notify = (type: NotificationType) => {
    switch (type) {
      case "login":
        return toast.success("Success");
      case "error":
        return toast.error("email or pasword wrong");
      case "confirm_password":
        return toast.error("password does not mutch");
      case "Register":
        return toast.success("Success");
    }
  };
  return notify;
};
