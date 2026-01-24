import { useReduxSelector } from "../../hooks/useRedux";
import Authorization from "./modal-item/authorization";

const Modals = () => {
  const { authorizationModalVisiblity } = useReduxSelector(
    (state) => state.modalSlice,
  );
  return <>{authorizationModalVisiblity && <Authorization />}</>;
};

export default Modals;
