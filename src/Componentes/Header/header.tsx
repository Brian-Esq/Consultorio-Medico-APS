import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';

function Header(){
    return(
        <div className="App-header">
            <Navbar collapseOnSelect expand="lg">
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;