import { useAuthStore, useCalendarStore } from "../../hooks";

export const FabDelete = () => {

    // // const { user } = useAuthStore();
    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handleDelete = () => {
        startDeletingEvent();
    }

    return (
        <button
            aria-label="btn-delete"
            className="btn btn-danger fab-danger center"
            onClick={handleDelete}
            style={{
                display: hasEventSelected ? '' : 'none'
            }}
        >
            <i className="fas fa-trash-alt"></i>    
        </button>
    )
}
