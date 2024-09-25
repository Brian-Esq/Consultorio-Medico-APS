import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './consulta.css';
import { Link } from "react-router-dom";
import Prescription from '../../Componentes/Prescription/prescription';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { parse } from 'path';

interface Consulta {
    ComGenerales: string;
    Costo: number;
}

function Consulta() {
    const { id } = useParams();
    const location = useLocation();
    const { cita } = location.state;
    const [consultas, setConsulta] = useState<Consulta[]>([]);
    const [costo, setCosto] = useState('');
    const [comentariosGen, setComentariosGen] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (costo && comentariosGen) {
            var flCosto = parseFloat(costo);
            
            //Guarda los valores y se usarán más adelante para enviar al backend (El objeto newConsulta con sus campos)
            const newConsulta: Consulta = {
                ComGenerales: comentariosGen,
                Costo: flCosto,
            };
            setConsulta([...consultas, newConsulta]);
            setCosto('');
            setComentariosGen('');
            alert(newConsulta.ComGenerales + '\n' + newConsulta.Costo);
            navigate('/citas');
        } else {
            alert('Por favor, complete todos los campos.');
        }
        console.log('Formulario enviado');
    };

    return (
        <Container className="consultaPage">
            <Row className='consultaTitleRow'>
                <Col>
                    <h1 className='consTitle'>Sección de Consulta</h1>
                </Col>
            </Row>
            <Row className='buttons'>
                <Col>
                    <Button className="finCons" type='button' onClick={handleSubmit}>Terminar Consulta</Button>
                </Col>
            </Row>
            <Row className='consData'>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='pacDataCol'>
                    <Row>
                        <Col>
                            <h2 className='pacData'>Datos de Consulta</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='pacData'>Cita ID: {id}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='pacData'>Nombre del Paciente: {cita.Paciente}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className='pacData'>Tipo de Cita: {cita.TipoCita}</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
            <Row>
                <Col>
                    <Prescription />
                </Col>
            </Row>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6}>
                    <Row className='generalDataRows'>
                        <Col >
                            <label style={{ marginRight: '10px', float: 'left' }}>Costo: </label>
                            <input 
                                type='float' 
                                name='costo' 
                                autoComplete='off' 
                                className='styled-input-general' 
                                value={costo}
                                onChange={(e) => setCosto(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className='generalDataRows'>
                        <Col>
                            <textarea 
                                name='comentariosGen' 
                                autoComplete='off'
                                className='styled-input-general comentariosGen'
                                placeholder='Comentarios Generales'
                                rows={1}
                                value={comentariosGen}
                                onChange={(e) => setComentariosGen(e.target.value)}
                                maxLength={200}
                            ></textarea>
                        </Col>
                    </Row>
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
        </Container>
    )
}

export default Consulta;