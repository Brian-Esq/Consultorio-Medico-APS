import './elementoInvEspecifico.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface ElementoInfo {
    Id: number,
    Nombre: string,
    Cantidad: number,
    Activo: boolean,
}

const ElementoEspecifico: React.FC<ElementoInfo> = ({ Id, Nombre, Cantidad }) => {
    
    const expediente = { Id, Nombre, Cantidad }

    return (
        <Container className='inventarioEspecificoComp'>
            <Row>
                <Col>
                    <p className='invInfoText'>Id: {expediente.Id}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>Nombre: {expediente.Nombre}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='docInfoText'>Cantidad Disponible: {expediente.Cantidad}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <br />
                    <p className='docInfoText' style={{color:'red'}}>AVISO: Si selecciona el botón de quitar, se quitará el siguiente elemento: {expediente.Nombre}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ElementoEspecifico;