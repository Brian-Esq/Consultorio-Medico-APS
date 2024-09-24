import './prescription.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Prescription() {
    return (
        <Container className='prescriptionPage'>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='formColumn'>
                    <form onSubmit={ev=> {
                        ev.preventDefault();
                        console.log('Prescripción enviada');
                    }} className='presForms'>
                        <Row className='formRows'>
                            <Col>
                                <h1>Prescripción</h1>
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Padecimiento</label>
                            </Col>
                            <Col>
                                <input type='text' />
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Tratamiento</label>
                            </Col>
                            <Col>
                                <input type='text' />
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Duración</label>
                            </Col>
                            <Col>
                                <input type='text' />
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Comentarios</label>
                            </Col>
                            <Col>
                                <input type='text' />
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <button type='submit' className='addSympBut'>Agregar</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
        </Container>
    )
}

export default Prescription;