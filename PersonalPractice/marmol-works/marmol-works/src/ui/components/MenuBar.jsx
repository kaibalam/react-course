import { Container, Nav, Navbar } from "react-bootstrap";
import { MenuBarItem } from "./MenuBarItem";

export const MenuBar = () => {
    return (
        <Navbar className="navbar navigation"  data-bs-theme="dark" >
            <Container>
                <Navbar.Brand href="/inicio">
                    <img
                        alt=""
                        src="./src/assets/icon.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Marmol Works
                </Navbar.Brand>
                <Nav className='me-auto'>
                    <MenuBarItem />
                </Nav>
            </Container>
        </Navbar>
    )
}
