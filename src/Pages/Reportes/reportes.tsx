import './reportes.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ReportesComp from '../../Componentes/Reportes/reportesComp';

function Reportes(){
    return(
        <Container className='reportesPage'>
            <Row className='reportesTitleRow'>
                <Col>
                    <h1 className='repTitle'>Reportes Generales</h1>
                </Col>
            </Row>
            <Row className='reportesTitleRow'>
                <Col>
                    <ReportesComp />
                </Col>
            </Row>
        </Container>
    )
}

export default Reportes;