import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './consulta.css';

function Consulta(){
    return(
        <Container className="consultaPage">
            <Row className='consultaTitle'>
                <Col>
                    <h1 className='consTitle'>Sección de Consulta</h1>
                </Col>
            </Row>
            <Row className='buttons'>
                <Col xs={12} md={2}></Col>
                <Col xs={12} md={4}>
                    <button className="initCons">Iniciar Consulta</button>
                </Col>
                <Col xs={12} md={4}>
                    <button className="finCons">Terminar Consulta</button>
                </Col>
                <Col xs={12} md={2}></Col>
            </Row>
        </Container>
    )
}

export default Consulta;