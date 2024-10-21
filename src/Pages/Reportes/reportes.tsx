import './reportes.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Reportes(){
    return(
        <Container className='reportesPage'>
            <Row className='reportesTitleRow'>
                <Col>
                    <h1 className='repTitle'>Reportes</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Reportes;