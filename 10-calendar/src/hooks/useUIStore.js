import { useDispatch, useSelector } from "react-redux"
import { onCLoseDateModal, onOpenDateModal } from "../store";

export const useUiStore = () => {

    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector(state => state.ui)

    const openDateModal = () => {
        dispatch(onOpenDateModal())
    }

    const closeDateModal = () => {
        dispatch(onCLoseDateModal());
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? closeDateModal() 
            : openDateModal();
    }

    return {
        //* Propiedades
        isDateModalOpen,
        //* Métodos
        openDateModal,
        closeDateModal,
        toggleDateModal,
    }
}