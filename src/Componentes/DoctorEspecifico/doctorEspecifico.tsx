import './doctorEspecifico.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface DoctorInfo {
    id: number,
    nombre: string,
    aPaterno: string,
    aMaterno: string,
    curp: string,
    rfc: string,
    numSeguro: string,
    status: boolean,
}

const DoctorEspecifico: React.FC<DoctorInfo> = ({ id, nombre, aPaterno, aMaterno, curp, rfc, numSeguro, status }) => {
    
    const doctor = { id, nombre, aPaterno, aMaterno, curp, rfc, numSeguro, status  }

    return (
        <Container className='doctorEspecificoComp'>
            <Row>
                <Col>
                    <p className='docInfoText'>Id: {doctor.id}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>Nombres: {doctor.nombre}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>Apellidos: {doctor.aPaterno} {doctor.aMaterno}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>CURP: {doctor.curp}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>RFC: {doctor.rfc}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>NSS: {doctor.numSeguro}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <br />
                    <p className='docInfoText' style={{color:'red'}}>AVISO: Si selecciona el botón de suspender, se suspenderá al doctor {doctor.nombre} con ID {doctor.id}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default DoctorEspecifico;