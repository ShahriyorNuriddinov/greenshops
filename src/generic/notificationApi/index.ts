import { toast } from "react-hot-toast";

type NotificationType =
  | "login"
  | "409"
  | "confirm_password"
  | "register"
  | "error"
  | "order"
  | "ordererror"
| "order-delete"
| "new"
export const notificationApi = () => {
  const notify = (type: NotificationType) => {
    switch (type) {
      case "login":
        return toast.success("Hush kelibsiz!");
      case "409":
        return toast.error("Email yoki parol xato!");
      case "confirm_password":
        return toast.error("Parollar mos emas!");
      case "register":
        return toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      case "error":
        return toast.error("Xato");
      case "order":
        return toast.success("Buyurtma muvaffaqiyatli amalga oshirildi!");
        case "ordererror":
        return toast.error("Malumot to'liq emas");
        case "order-delete":
        return toast.success("Buyurtma muvaffaqiyatli o'chirildi!");
        case "new":
        return toast.success("Ma'lumot muvaffaqiyatli yangilandi!");
    }
  };
  return notify;
};