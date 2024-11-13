import './config.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import DocInfo from '../../Componentes/DoctorEspecifico/doctorEspecifico';

interface DoctorInfo {
    Id: number,
    Nombres: string,
    Apellidos: string,
    CURP: string,
    RFC: string,
    NSS: string,
}

function Settings() {
    const [addNewDoctor, setAddNewDoctor] = useState(false);
    const [keepAdding, setKeepAdding] = useState(false);
    const [docName, setDocName] = useState('');
    const [docLastName, setDocLastName] = useState('');
    const [docCURP, setDocCURP] = useState('');
    const [docRFC, setDocRFC] = useState('');
    const [docNSS, setDocNSS] = useState('');
    const [docEmail, setDocEmail] = useState('');
    const [docPass, setDocPass] = useState('');
    const [docPassConf, setDocPassConf] = useState('');
    const [ID, setID] = useState('');
    const [doctor, setDoctor] = useState<DoctorInfo | null>(null);
    const [searchDoctor, setSearchDoctor] = useState(false);
    const [doctores, setDoctores] = useState<DoctorInfo[]>([]);
    const [nextId, setNextId] = useState(1); // Initial ID

    const handleAddDoctor = () => {
        setAddNewDoctor(!addNewDoctor);
        setKeepAdding(false);
        setDocName('');
        setDocLastName('');
        setDocCURP('');
        setDocRFC('');
        setDocNSS('');
        setDocEmail('');
        setDocPass('');
        setDocPassConf('');
    }

    const handleKeepAdding = () => {
        if (docName && docLastName && docCURP && docRFC && docNSS) {
            setKeepAdding(!keepAdding);
        } else {
            alert('Por favor llene todos los campos');
        }
    }

    const handleFinishAdding = () => {
        if (docEmail && docPass && docPassConf) {
            if (validateEmail(docEmail)) {
                if (docPass === docPassConf) {
                    const newDoctor: DoctorInfo = {
                        Id: nextId,
                        Nombres: docName,
                        Apellidos: docLastName,
                        CURP: docCURP,
                        RFC: docRFC,
                        NSS: docNSS
                    };
                    setDoctores([...doctores, newDoctor]);
                    setNextId(nextId + 1); // Increment the ID for the next doctor
                    alert('Doctor agregado exitosamente \n\n Datos: \n\nID: ' + nextId + '\n' + docName + '\n' + docLastName + '\n' + docCURP + '\n' + docRFC + '\n' + docNSS + '\n' + docEmail + '\n' + docPass + '\n' + docPassConf);
                    setAddNewDoctor(false);
                    setKeepAdding(false);
                    setDocName('');
                    setDocLastName('');
                    setDocCURP('');
                    setDocRFC('');
                    setDocNSS('');
                    setDocEmail('');
                    setDocPass('');
                    setDocPassConf('');
                } else {
                    alert('Las contraseñas no coinciden');
                }
            } else {
                alert('Por favor ingrese un correo válido');
            }
        } else {
            alert('Por favor llene todos los campos');
        }
    }

    const handleSearchDocID = () => {
        if (ID) {
            let IDInt = parseInt(ID)
            const filterDoc = doctores.find(doc => doc.Id === IDInt);
            if (filterDoc) {
                setDoctor(filterDoc);
                setID('');
            } else {
                alert('Doctor no encontrado');
                setID('');
                setDoctor(null);
            }
        } else {
            alert('Ingrese un valor válido de búsqueda por ID');
            setID('');
        }
    }

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSearchDoctor = () => {
        setSearchDoctor(!searchDoctor);
        setID('');
        setDoctor(null);
    }

    const handleSuspendDoctor = () => {
        if (doctor) {
            const espDoc = doctores.filter(doc => doc.Id !== doctor.Id);
            setDoctores(espDoc);
            setDoctor(null);
            alert('Doctor suspendido exitosamente');
        } else {
            alert('No se ha seleccionado un doctor para suspender');
        }
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
                                    <button className='addDocBot' onClick={handleAddDoctor}>Agregar Doctor</button>
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
                                            <input name='DocName'
                                                autoComplete='off'
                                                className='inputDocSettings'
                                                value={docName}
                                                required
                                                onChange={(e) => setDocName(e.target.value)}
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
                                                className='inputDocSettings'
                                                value={docLastName}
                                                required
                                                onChange={(e) => setDocLastName(e.target.value)}
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
                                                className='inputDocSettings'
                                                value={docCURP}
                                                required
                                                onChange={(e) => setDocCURP(e.target.value)}
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
                                                className='inputDocSettings'
                                                value={docRFC}
                                                required
                                                onChange={(e) => setDocRFC(e.target.value)}
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
                                                className='inputDocSettings'
                                                value={docNSS}
                                                required
                                                onChange={(e) => setDocNSS(e.target.value)}
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
                                                className='inputDocSettings'
                                                value={docEmail}
                                                required
                                                onChange={(e) => setDocEmail(e.target.value)}
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
                                                className='inputDocSettings'
                                                value={docPass}
                                                required
                                                onChange={(e) => setDocPass(e.target.value)}
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
                                                className='inputDocSettings'
                                                value={docPassConf}
                                                required
                                                onChange={(e) => setDocPassConf(e.target.value)}
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
            <Row>
                <Col xs={0} md={3}></Col>
                <Col xs={12} md={6} className='addDoctorCol'>
                    {searchDoctor ? (
                        <>
                            <Row className='insertDataRow'>
                                <Col xs={0} md={1}></Col>
                                <Col xs={12} md={10}>
                                    <Row>
                                        <Col>
                                            <label className='insertDataText'>Ingrese el ID del doctor: </label>
                                            <input name='InputDeDoctor'
                                                autoComplete='off'
                                                className='inputDocID'
                                                value={ID}
                                                onChange={(e) => setID(e.target.value.replace(/\D/, ''))} // Reemplaza cualquier carácter no numérico
                                                pattern='[0-9]*'
                                                inputMode='numeric'
                                            />
                                        </Col >
                                    </Row>
                                    <Row>
                                        <Col>
                                            <button className='searchDocBut' type='button' onClick={handleSearchDocID}>Buscar</button>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row>
                                <Col xs={0} md={1}></Col>
                                <Col xs={12} md={10}>
                                    {doctor ? (
                                        <DocInfo
                                            Id={doctor.Id}
                                            Nombres={doctor.Nombres}
                                            Apellidos={doctor.Apellidos}
                                            CURP={doctor.CURP}
                                            RFC={doctor.RFC}
                                            NSS={doctor.NSS}
                                        />
                                    ) : (
                                        <p className='docNotFoundText'>Ingrese un ID de doctor existente para encontrar un expediente</p>
                                    )}
                                </Col>
                                <Col xs={0} md={1}></Col>
                            </Row>
                            <Row className='botRowSett'>
                                <Col>
                                    <button className='canAddDocBot' onClick={handleSearchDoctor}>Cancelar</button>
                                </Col>
                                <Col>
                                    <button className='suspDocBot' onClick={handleSuspendDoctor}>Suspender</button>
                                </Col>
                            </Row>
                        </>
                    ) : (
                        <>
                            <Row className='selBotRow'>
                                <Col>
                                    <p>Seleccione el botón para buscar un doctor por ID</p>
                                </Col>
                            </Row>
                            <Row className='botRowSett'>
                                <Col>
                                    <button className='addDocBot' onClick={handleSearchDoctor}>Buscar Doctor</button>
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

export default Settings;