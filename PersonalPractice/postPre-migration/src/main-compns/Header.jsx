import { Container, Navbar } from "react-bootstrap"

export const Header = () => {
  return (
    <>
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container className="ms-sm-5">
            <Navbar.Brand><img src="./assets/logoclaro.png" width="55" height="55" className="d-inline-block align-top mb-0" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" >
              <Navbar.Text >
              Signed in as: <h4>Username</h4>
              </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>       
  )
}
  