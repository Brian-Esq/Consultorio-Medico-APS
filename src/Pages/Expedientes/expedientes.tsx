import './expedientes.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ExpedienteEspecifico from '../../Componentes/ExpedienteEspecifico/expedienteEspecifico';

interface Expediente {
    PacId: number,
    Altura: number,
    Peso: number,
    Alergias: string,
    Genero: string,
    Padecimientos: string[]
}

function Expedientes() {
    const [ID, setID] = useState('');
    const [expediente, setExpediente] = useState<Expediente | null>(null);

    const expedientes: Expediente[] = [
        {
            PacId: 1,
            Altura: 1.80,
            Peso: 77,
            Alergias: "Paracetamol, Piña",
            Genero: "Hombre",
            Padecimientos: ["Gripe", "Dolores de Cabeza"]
        },
        {
            PacId: 2,
            Altura: 1.50,
            Peso: 60,
            Alergias: "Cambios climáticos",
            Genero: "Mujer",
            Padecimientos: ["Fractura", "Irritamiento estomacal"]
        },
    ]

    const handleSubmit = () => {
        if (ID) {
            let IDInt = parseInt(ID)
            const filterExp = expedientes.find(expediente => expediente.PacId === IDInt);
            if (filterExp) {
                setExpediente(filterExp);
            } else {
                alert('Paciente no encontrado');
                setID('');
                setExpediente(null);
            }
        } else {
            alert('Ingrese un valor válido de búsqueda por ID');
            setID('');
        }
    }

    return (
        <Container className='expedientesPage'>
            <Row className='expedientesTitleRow'>
                <Col>
                    <h1 className='expTitle'>Expedientes Médicos</h1>
                </Col>
            </Row>
            <Row className='insertDataRow'>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6}>
                    <Row>
                        <Col>
                            <label className='insertDataText'>Ingrese el ID del paciente: </label>
                            <input 
                                    name='costo'
                                    autoComplete='off'
                                    className='inputPacID'
                                    value={ID}
                                     onChange={(e) => setID(e.target.value.replace(/\D/, ''))} // Reemplaza cualquier carácter no numérico
                                    pattern='[0-9]*'
                                    inputMode='numeric'
                            />
                        </Col >
                    </Row>
                    <Row>
                        <Col>
                            <button className='searchPacBut' type='button' onClick={handleSubmit}>Buscar</button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='expEspCol'>
                    {expediente ? (
                        <ExpedienteEspecifico
                            Id={expediente.PacId}
                            Altura={expediente.Altura}
                            Peso={expediente.Peso}
                            Alergias={expediente.Alergias}
                            Genero={expediente.Genero}
                            Padecimientos={expediente.Padecimientos}
                        />
                    ) : (
                        <p className='expNotFoundText'>Ingrese un ID de paciente existente para encontrar un expediente</p>
                    )}
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
        </Container>
    )
}

export default Expedientes;