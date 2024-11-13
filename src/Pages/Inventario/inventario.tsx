import './inventario.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';


function Inventario() {
    return (
        <Container className='inventarioPage'>
            <Row className='inventarioTitleRow'>
                <Col>
                    <h1 className='invTitle'>Inventario</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Inventario;