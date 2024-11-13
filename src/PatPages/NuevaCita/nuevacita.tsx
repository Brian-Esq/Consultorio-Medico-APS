import { useState, useEffect } from 'react';
import './nuevacita.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { CitasDisp, getCitasDispArray, TiposDeCita, getTiposCita, FechaYHora } from './nuevaCitaService';

function NuevaCita() {
    const [citasDisp, setCitasDisp] = useState<CitasDisp[]>([]);
    const [doctorSeleccionado, setDoctorSeleccionado] = useState('');
    const [horaSeleccionada, setHoraSeleccionada] = useState('');
    const [fechaSeleccionada, setFechaSeleccionada] = useState('');
    const [horariosDisponibles, setHorariosDisponibles] = useState<FechaYHora[]>([]);
    const [tipoCitaSel, setTipoCitaSel] = useState('');
    const [mostrarHorarios, setMostrarHorarios] = useState(false);
    const tiposCita: TiposDeCita[] = getTiposCita();

    useEffect(() => {
        // Simulación de carga de datos de doctores y sus disponibilidades
        const datosDoctores = getCitasDispArray();
        setCitasDisp(datosDoctores);
    }, []);

    useEffect(() => {
        if (doctorSeleccionado) {
            const doctor = citasDisp.find(d => d.doctor === doctorSeleccionado);
            setHorariosDisponibles(doctor ? doctor.FechaYHora : []);
            setFechaSeleccionada('');
            setHoraSeleccionada('');
            setTipoCitaSel('');
            setMostrarHorarios(false);
        } else {
            setHorariosDisponibles([]);
            setFechaSeleccionada('');
            setHoraSeleccionada('');
            setTipoCitaSel('');
            setMostrarHorarios(false);
        }
    }, [doctorSeleccionado, citasDisp]);

    useEffect(() => {
        if (fechaSeleccionada) {
            const doctor = citasDisp.find(d => d.doctor === doctorSeleccionado);
            const horarios = doctor ? doctor.FechaYHora.filter(h => h.fecha === fechaSeleccionada) : [];
            setHorariosDisponibles(horarios);
        }
    }, [fechaSeleccionada, doctorSeleccionado, citasDisp]);

    const handleShowInfo = () => {
        if(doctorSeleccionado && fechaSeleccionada && tipoCitaSel){
            if (fechaSeleccionada === horariosDisponibles.find(h => h.fecha === fechaSeleccionada)?.fecha) {
                setMostrarHorarios(true);
            } else {
                alert('No hay horarios disponibles para la fecha seleccionada');
            }
        } else {
            alert('Por favor seleccione un doctor, una fecha y un tipo de cita');
        }
    }

    const handleReserve = () => {
        alert(`Cita reservada con el Doctor: ${doctorSeleccionado}\nFecha: ${fechaSeleccionada}\nHora: ${horaSeleccionada}\nTipo de Cita: ${tipoCitaSel}`);
        setDoctorSeleccionado('');
        setHorariosDisponibles([]);
        setFechaSeleccionada('');
        setHoraSeleccionada('');
        setTipoCitaSel('');
        setMostrarHorarios(false);
    }

    const timeSlots = Array.from({ length: 12 }, (_, i) => `${9 + i}:00`);

    return (
        <Container className='nuevaCitaPage'>
            <Row className='NCTitleRow'>
                <Col>
                    <h1 className='NCTitle'>Nueva Cita</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='rowNuevaCitaSelect'>
                    <Form className='nuevaCitaForm'>
                        <Form.Group controlId="formDoctor">
                            <Form.Label>Seleccione un Doctor</Form.Label>
                            <Form.Control as="select" value={doctorSeleccionado} onChange={(e) => setDoctorSeleccionado(e.target.value)} 
                            className='select'>
                                <option value="">Seleccione un doctor</option>
                                {citasDisp.map((doctor, index) => (
                                    <option key={index} value={doctor.doctor}>{doctor.doctor}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formCitaTipo" className='formHora'>
                            <Form.Label>Tipo de Cita</Form.Label>
                            <Form.Control as="select" value={tipoCitaSel} onChange={(e) => setTipoCitaSel(e.target.value)} 
                                disabled={!doctorSeleccionado} className='select'>
                                <option value="">Seleccione un tipo</option>
                                {tiposCita.map((tipo, index) => (
                                    <option key={index} value={tipo.tipo}>{tipo.tipo}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formHora" className='formHora'>
                            <Form.Label>Seleccione un Día</Form.Label>
                            <br/>
                            <input
                                type='date'
                                name='dateTime'
                                autoComplete='off'
                                className='selectDate'
                                value={fechaSeleccionada} onChange={(e) => { setFechaSeleccionada(e.target.value); setMostrarHorarios(false); }}
                                disabled={!doctorSeleccionado}
                            />
                        </Form.Group>
                    </Form>
                    <button className='btnNuevaCita' onClick={handleShowInfo}>Ver Horarios</button>
                    {mostrarHorarios && (
                        <div className='timeSlots'>
                            <h2 className='NCSubtitle'>Horarios Disponibles</h2>
                            {timeSlots.map((time, index) => {
                                const isAvailable = horariosDisponibles.some(h => h.hora.includes(time));
                                return (
                                    <div key={index} className={`timeSlot ${isAvailable ? 'available' : 'unavailable'} ${horaSeleccionada === time ? 'selected' : ''}`} 
                                        onClick={() => isAvailable && setHoraSeleccionada(time)}>
                                        {time}
                                    </div>
                                );
                            })}
                            <button className='btnReserve' disabled={!doctorSeleccionado || !fechaSeleccionada || !horaSeleccionada || !tipoCitaSel}
                            onClick={handleReserve}>Reservar Cita</button>
                        </div>
                    )}
                </Col>
                <Col xs={12} md={3}>
                </Col>
            </Row>
        </Container>
    );
}

export default NuevaCita;