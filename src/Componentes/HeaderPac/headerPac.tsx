import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './headerPac.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface LogoutProps {
    onLogout: () => void;
}

const HeaderPac = ({ onLogout }: LogoutProps) => {
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
                            <Nav.Link className="underline-link"><p className='navWords'>Nueva Cita</p></Nav.Link >
                            <Nav.Link className="underline-link"><p className='navWords'>Mis Citas</p></Nav.Link >
                            <Nav.Link className="underline-link"><p className='navWords'>Mi Perfil</p></Nav.Link >
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

export default HeaderPac;