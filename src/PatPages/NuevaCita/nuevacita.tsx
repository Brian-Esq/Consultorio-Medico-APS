import React, { useState, useEffect } from 'react';
import './nuevacita.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { CitasDisp, getCitasDispArray } from './nuevaCitaService';

function NuevaCita() {
    const [doctores, setDoctores] = useState<{ nombre: string; horas: string[] }[]>([]);
    const [doctorSeleccionado, setDoctorSeleccionado] = useState('');
    const [horaSeleccionada, setHoraSeleccionada] = useState('');
    const [horasDisponibles, setHorasDisponibles] = useState<string[]>([]);

    useEffect(() => {
        // Simulación de carga de datos de doctores y sus disponibilidades
        const datosDoctores = [
            { nombre: 'Dr. Pérez', horas: ['10:00', '11:00', '14:00'] },
            { nombre: 'Dra. Gómez', horas: ['09:00', '12:00', '15:00'] },
            // Agrega más doctores y sus horas disponibles aquí
        ];
        setDoctores(datosDoctores);
    }, []);

    useEffect(() => {
        if (doctorSeleccionado) {
            const doctor = doctores.find(d => d.nombre === doctorSeleccionado);
            setHorasDisponibles(doctor ? doctor.horas : []);
        }
    }, [doctorSeleccionado, doctores]);

    return (
        <Container className='nuevaCitaPage'>
            <Row className='NCTitleRow'>
                <Col>
                    <h1 className='NCTitle'>Nueva Cita</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={0} md={4}></Col>
                <Col xs={12} md={4} className='rowNuevaCitaSelect'>
                    <Form className='nuevaCitaForm'>
                        <Form.Group controlId="formDoctor">
                            <Form.Label>Seleccione un Doctor</Form.Label>
                            <Form.Control as="select" value={doctorSeleccionado} onChange={(e) => setDoctorSeleccionado(e.target.value)} 
                            className='select'>
                                <option value="">Seleccione un doctor</option>
                                {doctores.map((doctor, index) => (
                                    <option key={index} value={doctor.nombre}>{doctor.nombre}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formHora" className='formHora'>
                            <Form.Label>Seleccione una Hora</Form.Label>
                            <Form.Control as="select" value={horaSeleccionada} onChange={(e) => setHoraSeleccionada(e.target.value)} 
                            disabled={!doctorSeleccionado} className='select'>
                                <option value="">Seleccione una hora</option>
                                {horasDisponibles.map((hora, index) => (
                                    <option key={index} value={hora}>{hora}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={0} md={4}></Col>
            </Row>
        </Container>
    );
}

export default NuevaCita;