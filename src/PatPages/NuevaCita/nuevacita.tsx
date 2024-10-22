import React from 'react'
import './nuevacita.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function NuevaCita() {
    return (
        <Container className='nuevaCitaPage'>
            <Row className='NCTitleRow'>
                <Col>
                    <h1 className='NCTitle'>Nueva Cita</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default NuevaCita;