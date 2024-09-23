import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.css';

function Header(){
    return(
        <div className="App-header">
            <Navbar collapseOnSelect expand="lg">
                <Container fluid>
                <Navbar.Brand href='/'><p>InfoSys</p></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto resNavBar">
                            <Nav.Link href="/" className="navigWords underline-link">Home</Nav.Link >
                            <Nav.Link href='/consulta' className="navigWords underline-link">Consultas</Nav.Link >
                            <Nav.Link href='/' className="navigWords underline-link">Citas</Nav.Link >
                            <Nav.Link href='/' className="navigWords underline-link">Reportes</Nav.Link >
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;