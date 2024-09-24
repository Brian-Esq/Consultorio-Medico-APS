import { Link } from 'react-router-dom';
import './programaciones.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

interface ProgramacionesProps {
    id: number,
    fecha: string,
    hora: string,
    TipoCita: string,
    Asistencia: boolean,
    Paciente: string,
    Empleado: string
}

const Programaciones: React.FC<ProgramacionesProps> = ({ id, fecha, hora, TipoCita, Asistencia, Paciente, Empleado }) => {
    return (
        <Container className="progsPage">
            <Row>
                <Col className="progsCol">
                    <Card className="card">
                        <Card.Body>
                            <Row>
                                <Link to='/consulta'><button className="initCons">Iniciar Consulta</button></Link>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Programaciones;