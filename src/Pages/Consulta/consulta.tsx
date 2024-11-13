import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './consulta.css';
import Prescription from '../../Componentes/Prescription/prescription';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ConsultaInt, finishConsulta } from './consultaService';

interface Prescription {
    padecimiento: string;
    tratamiento: string;
    duracion: string;
    comentarios: string;
}

function Consulta() {
    const { id } = useParams();
    const location = useLocation();
    const { cita } = location.state;
    const [consultas, setConsulta] = useState<ConsultaInt[]>([]);
    const [costo, setCosto] = useState('');
    const [comentariosGen, setComentariosGen] = useState('');
    const navigate = useNavigate();
    
    const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);
    const handlePrescriptionsChange = (newPrescriptions: Prescription[]) => {
        setPrescriptions(newPrescriptions);
    };

    const handleSubmit = () => {
        if (costo && comentariosGen) {
            var flCosto = parseFloat(costo);
            
            //Guarda los valores y se usarán más adelante para enviar al backend (El objeto newConsulta con sus campos)
            const newConsulta: ConsultaInt = {
                ComGenerales: comentariosGen,
                Costo: flCosto,
            };
            setConsulta([...consultas, newConsulta]);
            setCosto('');
            setComentariosGen('');
            console.log(cita.id, cita.TipoCita, flCosto, comentariosGen);
            //Método post para enviar los datos al backend
            finishConsulta(cita.id, cita.TipoCita, flCosto, comentariosGen, prescriptions);
            alert('Consulta finalizada con éxito.');
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
                    <button className="finConsul" type='button' onClick={handleSubmit}>Terminar Consulta</button>
                </Col>
            </Row>
            <Row className='consData'>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6}>
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
                    <Prescription onPrescriptionsChange={handlePrescriptionsChange}/>
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