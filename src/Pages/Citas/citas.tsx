import './citas.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function Citas(){
    return(
        <Container className='citasPage'>
            <Row className='citasTitleRow'>
                <Col>
                    <h1 className='citasTitle'>Citas Programadas</h1>
                </Col>
            </Row>
            <Row className='citasButRow'>
                <Col>
                    <Link to='/consulta'><button className="initCons">Iniciar Consulta</button></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Citas;