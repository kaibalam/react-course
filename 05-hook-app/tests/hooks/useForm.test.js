import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {

    const inictialForm = {
        name: 'Ricardo',
        email: 'ricardo@gmail.com'
    }

    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(inictialForm));
        // console.log(result.current);
        expect(result.current).toEqual({
            name: inictialForm.name,
            email: inictialForm.email,
            formState: { name: 'Ricardo', email: 'ricardo@gmail.com' },
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })

    })

    test('debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';
        //montar el hook
        const { result } = renderHook(() => useForm(inictialForm));
        const { onInputChange } = result.current;
        // onInputChange() //act() event...
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        })

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

        //expect, result.current.name === Juan
        //expect, resutl.current.formState.name === Juan

    })

    test('debe de realizar el reset del formulario', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm(inictialForm));
        const { onInputChange, onResetForm } = result.current;
        // onInputChange() //act() event...
        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm()
        })

        expect(result.current.name).toBe(inictialForm.name);
        expect(result.current.formState.name).toBe(inictialForm.name);
    })

})