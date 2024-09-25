import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './consulta.css';
import { Link } from "react-router-dom";
import Prescription from '../../Componentes/Prescription/prescription';

function Consulta(){
    return(
        <Container className="consultaPage">
            <Row className='consultaTitleRow'>
                <Col>
                    <h1 className='consTitle'>Sección de Consulta</h1>
                </Col>
            </Row>
            <Row className='buttons'>
                <Col>
                    <Link to='/citas'><button className="finCons">Terminar Consulta</button></Link>
                </Col>
            </Row>
            <Row className='buttons'>
                <Col>
                    <Row>
                        <Col>
                            <h2>Datos de Consulta</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Cita ID: </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Nombre del Paciente: </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Tipo de Cita:</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Prescription />
                </Col>
            </Row>
        </Container>
    )
}

export default Consulta;