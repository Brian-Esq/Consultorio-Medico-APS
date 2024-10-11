import './config.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Settings() {
    const [addNewDoctor, setAddNewDoctor] = useState(false);
    const [keepAdding, setKeepAdding] = useState(false);

    const handleAddDoctor = () => {
        setAddNewDoctor(!addNewDoctor);
        setKeepAdding(false);
    }

    const handleKeepAdding = () => {
        setKeepAdding(!keepAdding);
    }

    const handleFinishAdding = () => {
        setAddNewDoctor(false);
        setKeepAdding(false);
    }

    return (
        <Container className='SettingsPage'>
            <Row className='settingsTitleRow'>
                <Col>
                    <h1 className='settingsTitle'>Configuración</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='addDoctorCol'>
                    {!addNewDoctor ? (
                        <>
                            <Row className='selBotRow'>
                                <Col>
                                    <p>Seleccione el botón para agregar un nuevo doctor</p>
                                </Col>
                            </Row>
                            <Row className='botRowSett'>
                                <Col>
                                    <button className='addDocBot' onClick={handleAddDoctor}>Crear Cuenta</button>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                            <Row className='settingsRow'>
                                <Col>
                                    <h3 className='settingsSubtitle'>Agregar Doctor</h3>
                                </Col>
                            </Row>
                            {!keepAdding ? (
                                <>
                                    <Row>
                                        <Col className='settFields'>
                                            <label className='settText'>Nombres: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputSettings'
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='settFields'>
                                            <label className='settText'>Apellidos: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputSettings'
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='settFields'>
                                            <label className='settText'>CURP: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputSettings'
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='settFields'>
                                            <label className='settText'>RFC: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputSettings'
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='settFields'>
                                            <label className='settText'>NSS: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputSettings'
                                            />
                                        </Col>
                                    </Row>
                                    <Row className='botRowSett'>
                                        <Col>
                                            <button className='canAddDocBot' onClick={handleAddDoctor}>Cancelar</button>
                                        </Col>
                                        <Col>
                                            <button className='nextDocBot' onClick={handleKeepAdding}>Siguiente</button>
                                        </Col>
                                    </Row>
                                </>
                            ) : (
                                <>
                                    <Row>
                                        <Col className='settFields'>
                                            <label className='settText'>Correo: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputSettings'
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='settFields'>
                                            <label className='settText'>Contraseña: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputSettings'
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='settFields'>
                                            <label className='settText'>Confirmar Contraseña: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputSettings'
                                            />
                                        </Col>
                                    </Row>
                                    <Row className='botRowSett'>
                                        <Col>
                                            <button className='canAddDocBot' onClick={handleAddDoctor}>Cancelar</button>
                                        </Col>
                                        <Col>
                                            <button className='addDocBot' onClick={handleFinishAdding}>Finalizar</button>
                                        </Col>
                                    </Row>
                                </>
                            )}
                        </>
                    )}
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
        </Container>
    )
}

export default Settings;