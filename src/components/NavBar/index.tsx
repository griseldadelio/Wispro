import { Nav, Navbar, Container } from 'react-bootstrap';
import { PersonXFill } from 'react-bootstrap-icons';
import Logo from '../../assets/wispro.png';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        alt="Wispro logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Nav.Link href="/about">About Test</Nav.Link>
                        <Nav.Link href="/table">Table Users</Nav.Link>
                        <Nav.Link href="/charts">Charts</Nav.Link>
                        <Nav.Link href="/charts" >
                            <PersonXFill className='mb-1' />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export { NavBar }