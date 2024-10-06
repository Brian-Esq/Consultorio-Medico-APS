import './expedienteEspecifico.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Expediente {
    Id: number,
    Altura: number,
    Peso: number,
    Alergias: string,
    Genero: string,
    Padecimientos: string[]
}

const ExpedienteEspecifico: React.FC<Expediente> = ({ Id, Altura, Peso, Alergias, Genero, Padecimientos }) => {
    
    const expediente = { Id, Altura, Peso, Alergias, Genero, Padecimientos }

    return (
        <Container className='expedienteEspecificoComp'>
            <Row>
                <Col>
                    <p className='expInfoText'>Id: {expediente.Id}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='expInfoText'>Altura: {expediente.Altura}m</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='expInfoText'>Peso: {expediente.Peso}kg</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='expInfoText'>Alergias: {expediente.Alergias}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='expInfoText'>Genero: {expediente.Genero}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <table className='padecimientosTable'>
                        <thead>
                            <tr>
                                <th>Padecimientos Pasados</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expediente.Padecimientos.map((padecimiento, index) => (
                                <tr key={index}>
                                    <td>{padecimiento}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </Container>
    )
}

export default ExpedienteEspecifico;