import { act, renderHook } from "@testing-library/react"
import { useUiStore } from "../../src/hooks"
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "../../src/store";

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            ui: uiSlice.reducer
        },
        preloadedState: {
            ui: { ...initialState }
        }
    })
}

describe('Pruebas en usUiStore', () => {

    test('debe de regresar los valores por defecto', () => {

        const mockStore = getMockStore({ isDateModalOpen: false });
        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        expect(result.current).toEqual({
            isDateModalOpen: false,
            openDateModal: expect.any(Function),
            closeDateModal: expect.any(Function),
            toggleDateModal: expect.any(Function)
        });
    })

    test('openDateModal debe de colocar true en el isDateModalOpen', () => {

        const mockStore = getMockStore({ isDateModalOpen: false });
        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        const { isDateModalOpen, openDateModal } = result.current;

        act(() => {
            openDateModal();
        })

        expect(result.current.isDateModalOpen).toBeTruthy();

    })

    test('closeDateModal debe de colocar en false en isDateModalOpen', () => {

        const mockStore = getMockStore({ isDateModalOpen: true });
        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        const { isDateModalOpen, closeDateModal } = result.current;

        act(() => {
            closeDateModal();
        })
        expect(result.current.isDateModalOpen).toBeFalsy();
    })

    test('toggleDateModal debe de cambiar el estado respectivamente', () => {

        const mockStore = getMockStore({ isDateModalOpen: true });
        const { result } = renderHook(() => useUiStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        act(() =>{
            //Lo utilicé sin destructuración porque con la destructuración no 
            //se ejecutó en el siguiente act
            result.current.toggleDateModal();
        })
        console.log(result);
        expect( result.current.isDateModalOpen ).toBeFalsy();
        
        act(() =>{
            result.current.toggleDateModal();
        })
        console.log(result)
        expect( result.current.isDateModalOpen ).toBeTruthy();

    })

})