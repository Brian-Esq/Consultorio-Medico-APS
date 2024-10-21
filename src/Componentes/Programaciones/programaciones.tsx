import './programaciones.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import { deleteCita } from '../../Pages/Citas/citasService';

interface ProgramacionesProps {
    id: number,
    fecha: string,
    hora: string,
    TipoCita: string,
    asistencia: string,
    Paciente: string,
    Empleado: string
}

const Programaciones: React.FC<ProgramacionesProps> = ({ id, fecha, hora, TipoCita, asistencia, Paciente, Empleado }) => {
    const navigate = useNavigate();
    const handleConsulta = (cita: ProgramacionesProps) => {
        navigate(`/consulta/${cita.id}`, { state: { cita } });
    };
    const handleCncelacion = (id:number) => {
        // deleteCita(id);
        alert('La cita con el id ' + id + ' ha sido cancelada');
    }


    const cita = { id, fecha, hora, TipoCita, asistencia, Paciente, Empleado };

    return (
        <Container className="progsPage">
            <Row>
                <Col>
                    <Card className="card">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p className='progData'>Cita id: {id}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='progData'>Fecha: {fecha} - {hora}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='progData'>Paciente: {Paciente}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='progData'>Tipo de Cita: {TipoCita}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='progData'>Doctor: {Empleado}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <Button className="initCons" onClick={() => handleConsulta(cita)}>Iniciar Consulta</Button>
                                </Col>
                                <Col xs={12} sm={6}>
                                    <Button className="delCitaBut" onClick={() => handleCncelacion(cita.id)} >Eliminar Cita</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Programaciones;