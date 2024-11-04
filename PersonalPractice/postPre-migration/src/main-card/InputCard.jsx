import { Button, Form, InputGroup } from "react-bootstrap"

import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { AlertMessage } from "../common-comps/AlertMessage";
import { useAlert } from "../hooks/useAlert";

export const InputCard = () => {
    const [validated, setValidated] = useState(false);
    const { prefix, msisdn, messageValidation, formState, onInputChange, onResetForm } = useForm({
        prefix: '+502',
        msisdn: '',
        messageValidation: 'Ingrese un número válido'
    })
    const { isActive, message, openAlertMessage } = useAlert();
    const onFormSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        console.log(msisdn);
        console.log(messageValidation);
        let number = validarEntero(msisdn);
        console.log(number);
        if (number !== "" && msisdn.length === 8) {
            console.log('Es un entero y tiene 8 digitos');
            formState

        } else if (number !== "" && msisdn.length === 11) {
            console.log('Es un entero y tiene 11 digitos');
        } else {
            openAlertMessage('No es un número entero o no tiene los digitos adecuados!');
            console.log('No es un entero');
        }

    }

    const validarEntero = (valor) => {
        valor = parseInt(valor);
        if (isNaN(valor)) {
            return "";
        } else {
            return valor;
        }
    }
    return (
        <>
            <Form
                noValidate
                validated={validated}
                onSubmit={onFormSubmit}
            >
                <InputGroup id="inputGroupPrepend" className=" pb-3">
                    <InputGroup.Text>
                        {prefix}
                    </InputGroup.Text>
                    <Form.Control
                        placeholder="ingrese número"
                        name="msisdn"
                        type="text"
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon2"
                        value={msisdn}
                        onChange={onInputChange}
                        required
                    />
                    <Button
                        variant="danger"
                        type="submit"
                        id="button-addon2"
                        onChange={onInputChange}
                    >
                        Buscar
                    </Button>
                    <Button
                        variant="secondary"
                        id="button-addon2"
                        onClick={onResetForm}
                    >
                        Limpiar
                    </Button>
                    <Form.Control.Feedback type="invalid">{messageValidation}</Form.Control.Feedback>
                </InputGroup>
            </Form>
        </>
    )
}
