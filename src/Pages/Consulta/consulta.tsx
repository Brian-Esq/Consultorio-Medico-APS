import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './consulta.css';
import Prescription from '../../Componentes/Prescription/prescription';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface Consulta {
    ComGenerales: string;
    Costo: number;
}

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
    const [consultas, setConsulta] = useState<Consulta[]>([]);
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
            const newConsulta: Consulta = {
                ComGenerales: comentariosGen,
                Costo: flCosto,
            };
            setConsulta([...consultas, newConsulta]);
            setCosto('');
            setComentariosGen('');
            postData(cita.Paciente, cita.TipoCita, flCosto, comentariosGen, prescriptions);
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
                    <Button className="finConsul" type='button' variant="outline-danger" 
                    onClick={handleSubmit}>Terminar Consulta</Button>
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

    function postData(docName: string, tipoCita: string, costo: number, comentariosGen: string, prescriptions: Prescription[]) {
        alert(docName + '\n' + tipoCita + '\n' + costo + '\n' + comentariosGen + '\n \nReceta: \n' + prescriptions.map(p => p.padecimiento + ' ' + p.tratamiento + ' ' + p.duracion + ' ' + p.comentarios).join('\n'));
    }
}

export default Consulta;