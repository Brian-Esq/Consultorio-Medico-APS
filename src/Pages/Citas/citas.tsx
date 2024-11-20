import React, { useState, useEffect } from 'react';
import './citas.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Programaciones from '../../Componentes/Programaciones/programaciones';
//Cambiar para pruebas
import {CitaMedica,getCitas,getCitasArray } from './citasService';
// import {CitaMedica,getCitas } from './citasService';

const ITEMS_PER_PAGE = 2;

function Citas() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [citas, setCitas] = useState<CitaMedica[]>([]);


    /*Usar para cuando se tenga conexión con el backend*/
    useEffect(() => {
        const fetchCitas = async () => {
            const citasData = await getCitas();
            setCitas(citasData);
        };

        fetchCitas();
    }, []);

    // useEffect(() => {
    //     const fetchCitas = async () => {
    //         const citasData = getCitasArray();
    //         setCitas(citasData);
    //     };

    //     fetchCitas();
    // }, []);

    const handleFilterCitas = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
        setCurrentPage(1); // Reset to first page when filtering
    };

    const filteredCitas = selectedDate
        ? citas.filter(cita => cita.fecha === selectedDate)
        : citas;

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = filteredCitas.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredCitas.length / ITEMS_PER_PAGE);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Container className='citasPage'>
            <Row className='citasTitleRow'>
                <Col>
                    <h1 className='citasTitle'>Citas Programadas</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={12} xxl={4} className='dateCol'>
                    <h1 className='filtrarCitasText'>Citas por Día</h1>
                    <br/>
                    <label style={{marginRight:'10px'}}>Fecha: </label>
                    <input
                        type='date'
                        name='dateTime'
                        autoComplete='off'
                        className='dateInput'
                        onChange={handleFilterCitas}
                    />
                </Col>
                <Col xs={12} xxl={4} className='vistaCitas'>
                    {currentItems.map(cita => (
                        <Row key={cita.id} className='citasBodyRows'>
                            <Col>
                                <Programaciones
                                    id={cita.id}
                                    fecha={cita.fecha}
                                    hora={cita.hora}
                                    TipoCita={cita.tipoCitaDescripcion}
                                    asistencia={cita.asistencia}
                                    Paciente={cita.nombrePaciente + ' ' + cita.aPaternoPaciente + ' ' + cita.aMaternoPaciente}
                                    Empleado={cita.nombreEmpleado + ' ' + cita.aPaternoEmpleado + ' ' + cita.aMaternoEmpleado}
                                />
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col xs={12} xxl={4}></Col>
            </Row>
            <Row className='paginationRow'>
                <Col xs={2} md={3} xxl={4}></Col>
                <Col xs={8} md={6} xxl={4}>
                    <Button onClick={handlePreviousPage} disabled={currentPage === 1} className='navBotones'>
                        &lt;
                    </Button>
                    <span>{` Página ${currentPage} de ${totalPages} `}</span>
                    <Button onClick={handleNextPage} disabled={currentPage === totalPages} className='navBotones'>
                        &gt;
                    </Button>
                </Col>
                <Col xs={2} md={3} xxl={4}></Col>
            </Row>
        </Container>
    );
}

export default Citas;