import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import { BsFillCartFill } from "react-icons/bs";


const StoreNav = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="#home">Emelies & Jeanette's shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Hem</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/produkter">
                        <Nav.Link>Produkter</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form className="d-flex">
                    <Button variant="dark"><BsFillCartFill />Kundvagn</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default StoreNav;