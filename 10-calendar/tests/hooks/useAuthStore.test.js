import { act, renderHook, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../../src/store"
import { initialState, notAuthenticatedState } from "../fixtures/authStates"
import { testUserCredenciasl } from "../fixtures/testUser"
import { useAuthStore } from "../../src/hooks/useAuthStore"
import { calendarApi } from "../../src/api"

const getMockAuthStore = (initialState) => {
    return configureStore({
        reducer: {
            auth: authSlice.reducer
        },
        preloadedState: {
            auth: { ...initialState }
        }
    })
}

describe('Pruebas en useAuthStore', () => {

    beforeEach(() => localStorage.clear());

    test('debe de regresar los valores por defecto', () => {

        const mockStore = getMockAuthStore({ ...initialState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        expect(result.current).toEqual({
            status: 'checking',
            user: {},
            errorMessage: undefined,
            checkAuthToken: expect.any(Function),
            startLogin: expect.any(Function),
            startLogout: expect.any(Function),
            startRegister: expect.any(Function),
        })
    })

    test('startLogin debe de realizar el login correctamente', async () => {
        const mockStore = getMockAuthStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        await act(async () => {
            await result.current.startLogin(testUserCredenciasl);
        })

        const { errorMessage, status, user } = result.current;
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'TEST USER', uid: '66ad1b5e1800526c1087fe6e' }
        });

        expect(localStorage.getItem('token')).toEqual(expect.any(String));
        expect(localStorage.getItem('token-init-date')).toEqual(expect.any(String));


    })

    test('startLogin debe de fallar la autenticación', async () => {
        const mockStore = getMockAuthStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        await act(async () => {
            await result.current.startLogin({ email: 'algo@google.com', password: '123456' });
        })

        const { errorMessage, status, user } = result.current;
        expect(localStorage.getItem('token')).toBe(null);
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: 'Credenciales incorrectas',
            status: 'not-authenticated',
            user: {}
        })

        await waitFor(
            () => expect(result.current.errorMessage).toBe(undefined)
        );
    })

    test('startRegister debe de crear un usuario', async () => {
        const newUser = {
            email: 'algo@google.com',
            password: '123456789',
            name: 'test User 2'
        }
        const mockStore = getMockAuthStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        const spy = jest.spyOn(calendarApi, 'post').mockReturnValue({
            data: {
                ok: true,
                uid: "123412342",
                name: "TEST USER",
                token: "ALGUN-TOKEN"
            }
        });
        await act(async () => {
            await result.current.startRegister(newUser);
        });

        const { errorMessage, status, user } = result.current;

        // console.log({ errorMessage, status, user });
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'TEST USER', uid: '123412342' }
        });

        spy.mockRestore();

    })

    test('startRegister debe de fallar la creación', async () => {

        const mockStore = getMockAuthStore({ ...notAuthenticatedState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });


        await act(async () => {
            await result.current.startRegister(testUserCredenciasl);
        });

        const { errorMessage, status, user } = result.current;

        // console.log({ errorMessage, status, user });
        expect({ errorMessage, status, user }).toEqual({
            errorMessage: 'Un usuario existe con ese correo',
            status: 'not-authenticated',
            user: {}
        });


    })

    test('checkAuthToken debe de fallar si no hay token', async () => {

        const mockStore = getMockAuthStore({ ...initialState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });

        await act(async () => {
            await result.current.checkAuthToken();
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'not-authenticated',
            user: {}
        })
    })

    test('checkAuthToken debe de autenticar el usuario si hay token', async () => {
        const { data } = await calendarApi.post('/auth', testUserCredenciasl);
        localStorage.setItem('token', data.token);

        const mockStore = getMockAuthStore({ ...initialState });
        const { result } = renderHook(() => useAuthStore(), {
            wrapper: ({ children }) => <Provider store={mockStore}>{children}</Provider>
        });
        await act(async () => {
            await result.current.checkAuthToken();
        });

        const { errorMessage, status, user } = result.current;

        expect({ errorMessage, status, user }).toEqual({
            errorMessage: undefined,
            status: 'authenticated',
            user: { name: 'TEST USER', uid: '66ad1b5e1800526c1087fe6e' }
        })

    })

})