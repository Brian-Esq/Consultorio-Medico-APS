import './prescription.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from 'react';

interface Prescription {
    padecimiento: string;
    tratamiento: string;
    duracion: string;
    comentarios: string;
}

function PrescriptionComponent() {
    const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

    return (
        <Container className='prescriptionPage'>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='formColumn'>
                    <form onSubmit={ev => {
                        ev.preventDefault();
                        const target = ev.target as HTMLFormElement;
                        const newPrescription: Prescription = {
                            padecimiento: (target.elements.namedItem('padecimiento') as HTMLInputElement).value,
                            tratamiento: (target.elements.namedItem('tratamiento') as HTMLInputElement).value,
                            duracion: (target.elements.namedItem('duracion') as HTMLInputElement).value,
                            comentarios: (target.elements.namedItem('comentarios') as HTMLInputElement).value,
                        };

                        setPrescriptions([...prescriptions, newPrescription]);

                        // Reset the form fields
                        target.reset();
                    }} className='presForms'>
                        <Row className='formRows'>
                            <Col>
                                <h1>Añadir Padecimiento</h1>
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Padecimiento</label>
                            </Col>
                            <Col>
                                <input type='text' name='padecimiento' autoComplete='off'/>
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Tratamiento</label>
                            </Col>
                            <Col>
                                <input type='text' name='tratamiento' autoComplete='off'/>
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Duración</label>
                            </Col>
                            <Col>
                                <input type='text' name='duracion' autoComplete='off'/>
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Comentarios</label>
                            </Col>
                            <Col>
                                <input type='text' name='comentarios' autoComplete='off'/>
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <button type='submit' className='addSympBut'>Agregar</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
            <Row className='presRow'>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='presCol'>
                    <table className='prescriptionTable'>
                        <thead>
                            <tr>
                                <th>Padecimiento</th>
                                <th>Tratamiento</th>
                                <th>Duración</th>
                                <th>Comentarios</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prescriptions.map((prescription, index) => (
                                <tr key={index}>
                                    <td>{prescription.padecimiento}</td>
                                    <td>{prescription.tratamiento}</td>
                                    <td>{prescription.duracion}</td>
                                    <td>{prescription.comentarios}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
        </Container>
    )
}

export default PrescriptionComponent;