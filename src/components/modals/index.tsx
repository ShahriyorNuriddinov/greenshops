import { useReduxSelector } from '../../hooks/useRedux';
import AuthorisationModal from './authorisation';

const Modals = () => {
      const { openAuthorisationModalVisiblty } = useReduxSelector(
        (state) => state.modalSlice
      );
  return (
    <>
      {openAuthorisationModalVisiblty && <AuthorisationModal/>}
    </>
  )
}

export default Modals
