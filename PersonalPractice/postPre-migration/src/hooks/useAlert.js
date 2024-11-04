import { useEffect, useState } from "react"

export const useAlert = () => {

    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState();

    useEffect(() => {
        if (isActive === true) {
            setTimeout(() => {
                setIsActive(false);
            }, 3000);
        }

    }, [isActive]);

    const openAlertMessage = ( msg = 'Something went wrong...') => {
        setMessage(msg);
        setIsActive(true);
    }

    return {
        isActive,
        message,
        openAlertMessage
    }
}
