import { MemoryRouter } from "react-router-dom"
import { MainApp } from "../../src/09-useContext/MainApp"
import { render, screen } from "@testing-library/react"

describe('Pruebas en <MainApp />', () => {

    test('debe de mostrar el homePage', () => {

        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('HomePage') ).toBeTruthy();

    })
    test('debe de mostrar el loginPage', () => {

        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('LoginPage') ).toBeTruthy();

    })

    test('debe de mostrar el loginPage', () => {

        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        )

        expect( screen.getByText('AboutPage') ).toBeTruthy();

    })
})