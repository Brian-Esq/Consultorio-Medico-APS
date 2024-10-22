import React from 'react'
import './miscitas.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MisCitas() {
    return (
        <Container className='misCitasPage'>
            <Row className='misCitasTitleRow'>
                <Col>
                    <h1 className='misCitasTitle'>Mis Citas</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default MisCitas;