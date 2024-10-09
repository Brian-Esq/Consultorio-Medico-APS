import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface LogoutProps {
    onLogout: () => void;
}

const Header = ({ onLogout }: LogoutProps) => {
    const handleLogout = () => {
        onLogout();
    }
    
    return (
        <div className="App-header">
            <Navbar collapseOnSelect expand="xl">
                <Container fluid>
                    <Navbar.Brand href='/'><p className='brandName'>MediSys</p></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto resNavBar">
                            <Nav.Link href='/citas' className="underline-link"><p className='navWords'>Citas</p></Nav.Link >
                            <Nav.Link href='/expedientes' className="underline-link"><p className='navWords'>Expendientes</p></Nav.Link >
                            <Nav.Link href='/reportes' className="underline-link"><p className='navWords'>Reportes</p></Nav.Link >
                            <Nav.Link href='/config' className="underline-link"><p className='navWords'>Configuración</p></Nav.Link >
                        </Nav>
                        <Nav>
                            <Row>
                                <Col xs={12}>
                                    <Row>
                                        <Col>
                                            <Nav.Link className="logoutNav" href='/login'>
                                                <button className="logoutBot" onClick={handleLogout}>Cerrar Sesión</button>
                                            </Nav.Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;