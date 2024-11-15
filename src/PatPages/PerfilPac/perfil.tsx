import './perfil.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Paciente, getPerfil, putPerfil } from './perfilService';
import { useState } from 'react';


function Perfil() {
    const [changeDataState, setChangeDataState] = useState(false);
    const [patName, setPatName] = useState('');
    const [patFirstLastName, setPatFirstLastName] = useState('');
    const [patSecondLastName, setPatSecondLastName] = useState('');
    const [patPhone, setPatPhone] = useState('');
    const [patEmail, setPatEmail] = useState('');
    const [patBirth, setPatBirth] = useState('');

    const handleChangeDataState = () => {
        setChangeDataState(!changeDataState);
        setPatName('');
        setPatFirstLastName('');
        setPatSecondLastName('');
        setPatPhone('');
        setPatEmail('');
        setPatBirth('');
    }

    const handleChangePatInfo = () => {
        if (patName === '' || patFirstLastName === '' || patSecondLastName === '' || patPhone === '' || patEmail === '' || patBirth === '') {
            alert('Por favor, llene todos los campos');
            return;
        } else {
            const patInfo: Paciente = {
                Nombres: patName,
                ApellidoPaterno: patFirstLastName,
                ApellidoMaterno: patSecondLastName,
                NumTelefono: patPhone,
                Correo: patEmail,
                fechaNacimiento: patBirth
            }
            alert('Datos actualizados correctamente\n' + JSON.stringify(patInfo));
            setPatName('');
            setPatFirstLastName('');
            setPatSecondLastName('');
            setPatPhone('');
            setPatEmail('');
            setPatBirth('');
        }
    }

    return (
        <Container className='perfilPage'>
            <Row className='perfilTitleRow'>
                <Col>
                    <h1 className='perfilTitle'>Mi Perfil</h1>
                </Col>
            </Row>
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='addProfileCol'>
                    <Row>
                        <Col>
                            <h3 className='profileSubtitle'>Completar Datos</h3>
                        </Col>
                    </Row>
                    {!changeDataState ? (
                        <>
                            <Row>
                                <Col>
                                    <p>Seleccione el botón para completar los datos de su perfil</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <button className='changeProfBot' onClick={handleChangeDataState}>Completar Datos</button>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                        <Row>
                            <Col className='profileFields'>
                                <label className='profileText'>Nombres: </label>
                            </Col>
                            <Col>
                                <input name='DocName'
                                    autoComplete='off'
                                    className='inputProfSettings'
                                    value={patName}
                                    required
                                    onChange={(e) => setPatName(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='profileFields'>
                                <label className='profileText'>Apellido Paterno: </label>
                            </Col>
                            <Col>
                                <input name='NewUser'
                                    autoComplete='off'
                                    className='inputProfSettings'
                                    value={patFirstLastName}
                                    required
                                    onChange={(e) => setPatFirstLastName(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='profileFields'>
                                <label className='profileText'>Apellido Materno: </label>
                            </Col>
                            <Col>
                                <input name='NewUser'
                                    autoComplete='off'
                                    className='inputProfSettings'
                                    value={patSecondLastName}
                                    required
                                    onChange={(e) => setPatSecondLastName(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='profileFields'>
                                <label className='profileText'>Número de Telefono: </label>
                            </Col>
                            <Col>
                                <input name='NewUser'
                                    autoComplete='off'
                                    className='inputProfSettings'
                                    value={patPhone}
                                    required
                                    onChange={(e) => setPatPhone(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='profileFields'>
                                <label className='profileText'>Correo electrónico: </label>
                            </Col>
                            <Col>
                                <input name='NewUser'
                                    autoComplete='off'
                                    className='inputProfSettings'
                                    value={patEmail}
                                    required
                                    onChange={(e) => setPatEmail(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className='profileFields'>
                                <label className='profileText'>Fecha de Nacimiento: </label>
                            </Col>
                            <Col>
                                <input name='NewUser'
                                    autoComplete='off'
                                    className='inputProfSettings'
                                    value={patBirth}
                                    required
                                    onChange={(e) => setPatBirth(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <button className='canChangeDataBot' onClick={handleChangeDataState}>Cancelar</button>
                            </Col>
                            <Col>
                                <button className='changeDataBot' onClick={handleChangePatInfo}>Confirmar</button>
                            </Col>
                        </Row>
                        </>
                    )}
                </Col>
                <Col xs={0} md={3}></Col>
            </Row>
        </Container>
    )
}

export default Perfil;