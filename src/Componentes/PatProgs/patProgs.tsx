import './patProgs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
// import { deleteCita } from '../../Pages/Citas/citasService';

interface PatProgramacionesProps {
    id: number,
    fecha: string,
    hora: string,
    TipoCita: string,
    asistencia: string,
    Paciente: string,
    Empleado: string
}

const Programaciones: React.FC<PatProgramacionesProps> = ({ id, fecha, hora, TipoCita, asistencia, Paciente, Empleado }) => {
    const navigate = useNavigate();
    const handleConsulta = (cita: PatProgramacionesProps) => {
        navigate(`/consulta/${cita.id}`, { state: { cita } });
    };
    const handleCncelacion = (id:number) => {
        // deleteCita(id);
        alert('La cita con el id ' + id + ' ha sido cancelada');
    }


    const cita = { id, fecha, hora, TipoCita, asistencia, Paciente, Empleado };

    return (
        <Container className="patProgsPage">
            <Row>
                <Col>
                    <Card className="patCard">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p className='patProgData'>Cita id: {id}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='patProgData'>Fecha: {fecha} - {hora}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='patProgData'>Paciente: {Paciente}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='patProgData'>Tipo de Cita: {TipoCita}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className='patProgData'>Doctor: {Empleado}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <Button className="delPatCitaBut" onClick={() => handleCncelacion(cita.id)} >Eliminar Cita</Button>
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