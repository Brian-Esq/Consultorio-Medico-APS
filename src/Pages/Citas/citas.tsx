import './citas.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import Programaciones from '../../Componentes/Programaciones/programaciones';

interface CitaMedica {
    id: number,
    fecha: string,
    hora: string,
    TipoCita: string,
    Asistencia: boolean,
    Paciente: string,
    Empleado: string
}

function Citas() {

    const cita1: CitaMedica = {
        id: 1,
        fecha: '2021-09-01',
        hora: '10:00',
        TipoCita: 'Consulta',
        Asistencia: true,
        Paciente: 'Brian',
        Empleado: 'Eustace'
    }
    return (
        <Container className='citasPage'>
            <Row className='citasTitleRow'>
                <Col>
                    <h1 className='citasTitle'>Citas Programadas</h1>
                </Col>
            </Row>
            <Row className='citasButRow'>
                <Col className='citasButCol'>
                    <Programaciones id={cita1.id} fecha={cita1.fecha} hora={cita1.hora}
                        TipoCita={cita1.TipoCita} Asistencia={cita1.Asistencia} Paciente={cita1.Paciente} Empleado={cita1.Empleado} />
                </Col>
            </Row>
        </Container>
    )
}

export default Citas;