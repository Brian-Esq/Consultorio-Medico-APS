import React, { useState } from 'react';
import './citas.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Programaciones from '../../Componentes/Programaciones/programaciones';

interface CitaMedica {
    id: number,
    fecha: string,
    hora: string,
    TipoCita: string,
    Asistencia: boolean,
    Paciente: string,
    Empleado: string
}

const ITEMS_PER_PAGE = 2;

function Citas() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    const citas: CitaMedica[] = [
        {
            id: 1,
            fecha: '2024-09-01',
            hora: '10:00',
            TipoCita: 'Consulta',
            Asistencia: true,
            Paciente: 'Brian',
            Empleado: 'Eustace'
        },
        {
            id: 2,
            fecha: '2024-09-02',
            hora: '11:00',
            TipoCita: 'Consulta',
            Asistencia: false,
            Paciente: 'Alice',
            Empleado: 'John'
        },
        {
            id: 3,
            fecha: '2024-09-03',
            hora: '12:00',
            TipoCita: 'Consulta',
            Asistencia: true,
            Paciente: 'Charlie',
            Empleado: 'Doe'
        },
        {
            id: 4,
            fecha: '2024-09-04',
            hora: '13:00',
            TipoCita: 'Consulta',
            Asistencia: true,
            Paciente: 'David',
            Empleado: 'Smith'
        },
        {
            id: 5,
            fecha: '2024-09-05',
            hora: '14:00',
            TipoCita: 'Operación',
            Asistencia: false,
            Paciente: 'Eve',
            Empleado: 'Johnson'
        }
    ];

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
                                    TipoCita={cita.TipoCita}
                                    Asistencia={cita.Asistencia}
                                    Paciente={cita.Paciente}
                                    Empleado={cita.Empleado}
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
    )
}

export default Citas;