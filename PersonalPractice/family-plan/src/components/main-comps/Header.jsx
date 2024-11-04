import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export const Header = () => {
    return (
        <Navbar collapseOnSelect bg='dark' variant='dark' expand="lg" >
            <Container>
                <Navbar.Brand><img src="/public/logoclaro.png" width="55" height="55" className='d-inline-block align-top mb-0'></img></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text>
                        Signed in as: <small>Username</small>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
