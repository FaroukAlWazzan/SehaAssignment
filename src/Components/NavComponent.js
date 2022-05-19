import './Styles.css';
import { Nav, Navbar, Container, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg" className='navbar-all ps-5 pe-5'>
                <Container fluid>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href={null} className='ms-3 me-3 navtext'>الرئيسية</Nav.Link>
                            <Nav.Link href={null} className='ms-3 me-3 navtext'>من نحن</Nav.Link>
                            <Nav.Link href={null} className='ms-3 me-3 navtext'>الكادر الطبي</Nav.Link>
                            <Nav.Link href={null} className='ms-3 me-3 navtext'>اتصل بنا</Nav.Link>
                        </Nav>
                        <Form action='https://www.sehapracto.com/login/' className="d-flex">
                            <Button variant="outline-success" className='btn btn-primary text-white nav-btn-color px-4 py-2'>تسجيل الدخول</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    );
}

export default NavBar;