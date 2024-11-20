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
    const [patBirth, setPatBirth] = useState('');
    let paciente: Paciente = {} as Paciente;
    let patInfo: Paciente = {} as Paciente;

    // const fetchPaciente = async (id: number): Promise<boolean> => {
    //     try {
    //         const paciente: Paciente = await getPerfil(id);
    //         setPaciente(paciente);
    //         return true;
    //     } catch (error) {
    //         console.error('Error fetching paciente:', error);
    //         setPaciente(null);
    //         return false;
    //     }
    // };

    const handleChangeDataState = () => {
        setChangeDataState(!changeDataState);
        setPatName('');
        setPatFirstLastName('');
        setPatSecondLastName('');
        setPatPhone('');
        setPatBirth('');
    }

    const handleChangePatInfo = async () => {
        if (patName === '' || patFirstLastName === '' || patSecondLastName === '' || patPhone === '' || patBirth === '') {
            alert('Por favor, llene todos los campos');
            return;
        } else {
            const idUser = localStorage.getItem('id');

            paciente = await getPerfil(+idUser!);
            console.log(paciente);
            if(!paciente){
                alert('No se pudo obtener el perfil actual');
                return;
            }else{
                 patInfo = {
                    id: paciente!.id,
                    nombre: patName,
                    aPaterno: patFirstLastName,
                    aMaterno: patSecondLastName,
                    numTelefono: patPhone,
                    fechaNac: patBirth,
                    correo: paciente!.correo,
                    historialMed: paciente!.historialMed,
                    usuario: paciente!.usuario,
                    contraseña: paciente!.contraseña,
                    status:paciente!.status
                }
            }
            
           
            const response = await putPerfil(patInfo);

            console.log(response);

            if (response && (response.status >=200 && response.status <300)) {
                alert('Datos actualizados correctamente');
                setPatName('');
                setPatFirstLastName('');
                setPatSecondLastName('');
                setPatPhone('');
                setPatBirth('');
            } else {
                alert('Sucedio un error al actualizar los datos');
            }
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
                                    <label className='profileText'>Nombre(s): </label>
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