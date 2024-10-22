import './perfil.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Perfil() {
    return (
        <Container className='perfilPage'>
            <Row className='perfilTitleRow'>
                <Col>
                    <h1 className='perfilTitle'>Mi Perfil</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Perfil;