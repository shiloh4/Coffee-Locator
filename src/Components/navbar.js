import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function NavbarComponent() {
    return (
        <>
        <Navbar bg="dark" variant="dark" style={{ zIndex: 1000 }}>
            <Container>
                <Navbar.Brand href='#home' className="mx-2"> {/* logo goes here */}</Navbar.Brand>
                <Form className="d-flex mx-2">
                    <InputGroup>
                        <Form.Control
                            placeholder="Username"
                            aria-label='Username'
                            aria-describedby='Username' />
                    </InputGroup>
                </Form>
                <Nav className="d-flex align-items-center">
                    <Nav.Link href="#tasks" className="mx-2">Tasks</Nav.Link>
                    <Nav.Link href="#schedule" className="mx-2">Schedule</Nav.Link>
                </Nav>
                
            </Container>
        </Navbar>
        </>
    );
}