import { Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Navbar.Brand href="#home">
                <img
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>

        </div>
    )
}
export { NavBar }