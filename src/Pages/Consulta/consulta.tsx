import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './consulta.css';
import { Link } from "react-router-dom";
import Prescription from '../../Componentes/Prescription/prescription';
import { useLocation, useParams } from 'react-router-dom';

function Consulta() {
    const { id } = useParams();
    const location = useLocation();
    const { cita } = location.state;

    return (
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
            <Row className='consData'>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='pacDataCol'>
                    <Row>
                        <Col>
                            <h2 className='pacData'>Datos de Consulta</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='pacData'>Cita ID: {id}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='pacData'>Nombre del Paciente: {cita.Paciente}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='pacData'>Tipo de Cita: {cita.TipoCita}</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} md={3}></Col>
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