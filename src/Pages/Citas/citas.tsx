import './citas.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

    const citas: CitaMedica[] = [
        {
            id: 1,
            fecha: '2021-09-01',
            hora: '10:00',
            TipoCita: 'Consulta',
            Asistencia: true,
            Paciente: 'Brian',
            Empleado: 'Eustace'
        },
        {
            id: 2,
            fecha: '2021-09-02',
            hora: '11:00',
            TipoCita: 'Consulta',
            Asistencia: false,
            Paciente: 'Alice',
            Empleado: 'John'
        },
        {
            id: 3,
            fecha: '2021-09-03',
            hora: '12:00',
            TipoCita: 'Consulta',
            Asistencia: true,
            Paciente: 'Charlie',
            Empleado: 'Doe'
        }
    ];

    return (
        <Container className='citasPage'>
            <Row className='citasTitleRow'>
                <Col>
                    <h1 className='citasTitle'>Citas Programadas</h1>
                </Col>
            </Row>
            {citas.map(cita => (
                <Row key={cita.id} className='citasBodyRows'>
                    <Col>
                        <Programaciones 
                            id={cita.id} 
                            fecha={cita.fecha} 
                            hora={cita.hora}
                            TipoCita={cita.TipoCita} 
                            Asistencia={cita.Asistencia} 
                            Paciente={cita.Paciente} 
                            Empleado={cita.Empleado}
                        />
                    </Col>
                </Row>
            ))}
        </Container>
    )
}

export default Citas;