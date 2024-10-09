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

interface PrescriptionComponentProps {
    onPrescriptionsChange: (prescriptions: Prescription[]) => void;
}

function PrescriptionComponent({ onPrescriptionsChange }: PrescriptionComponentProps) {
    const [prescriptions, setPrescriptions] = useState<Prescription[]>([]);

    const handleFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const target = ev.target as HTMLFormElement;
        const padecimiento = (target.elements.namedItem('padecimiento') as HTMLInputElement).value;
        const tratamiento = (target.elements.namedItem('tratamiento') as HTMLInputElement).value;
        const duracion = (target.elements.namedItem('duracion') as HTMLInputElement).value;
        const comentarios = (target.elements.namedItem('comentarios') as HTMLInputElement).value;

        if (padecimiento && tratamiento && duracion && comentarios) {
            const newPrescription: Prescription = {
                padecimiento,
                tratamiento,
                duracion,
                comentarios,
            };
            const updatedPrescriptions = [...prescriptions, newPrescription];
            setPrescriptions(updatedPrescriptions);
            onPrescriptionsChange(updatedPrescriptions); // Llamar al callback con las nuevas prescripciones
            target.reset();
        } else {
            alert('Por favor, complete todos los campos.');
        }
    };

    return (
        <Container className='prescriptionPage'>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='formColumn'>
                    <form onSubmit={handleFormSubmit} className='presForms'>
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
                                <input type='text' name='padecimiento' autoComplete='off' className='styled-input'/>
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Tratamiento</label>
                            </Col>
                            <Col>
                                <input type='text' name='tratamiento' autoComplete='off' className='styled-input'/>
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Duración</label>
                            </Col>
                            <Col>
                                <input type='text' name='duracion' autoComplete='off' className='styled-input'/>
                            </Col>
                        </Row>
                        <Row className='formRows'>
                            <Col>
                                <label>Comentarios</label>
                            </Col>
                            <Col>
                                <input type='text' name='comentarios' autoComplete='off' className='styled-input'/>
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