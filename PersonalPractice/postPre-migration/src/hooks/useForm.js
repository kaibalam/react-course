import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        console.log(name, value);
        if (value !== null || value !== undefined) {
            setFormState({
                ...formState,
                [name]: value,
            })
        } else {
            setFormState({
                ...formState,
            })
            console.log(JSON.stringify(formState));
        }
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
