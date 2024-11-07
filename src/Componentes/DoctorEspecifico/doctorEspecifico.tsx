import './doctorEspecifico.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface DoctorInfo {
    Id: number,
    Nombres: string,
    Apellidos: string,
    CURP: string,
    RFC: string,
    NSS: string
}

const DoctorEspecifico: React.FC<DoctorInfo> = ({ Id, Nombres, Apellidos, CURP, RFC, NSS }) => {
    
    const expediente = { Id, Nombres, Apellidos, CURP, RFC, NSS }

    return (
        <Container className='doctorEspecificoComp'>
            <Row>
                <Col>
                    <p className='docInfoText'>Id: {expediente.Id}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>Nombres: {expediente.Nombres}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>Apellidos: {expediente.Apellidos}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>CURP: {expediente.CURP}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>RFC: {expediente.RFC}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>NSS: {expediente.NSS}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default DoctorEspecifico;