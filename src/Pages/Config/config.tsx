import './config.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import DocInfo from '../../Componentes/DoctorEspecifico/doctorEspecifico';
import { DoctorInfo, getEspecificDoc, postDoctor, TiposDeCita } from './configService';


function Settings() {
    const [addNewDoctor, setAddNewDoctor] = useState(false);
    const [keepAdding, setKeepAdding] = useState(false);
    const [searchDoctor, setSearchDoctor] = useState(false);
    const [addTipoCita, setAddTipoCita] = useState(false);
    const [docName, setDocName] = useState('');
    const [docPLastName, setDocPLastName] = useState('');
    const [docMLastName, setDocMLastName] = useState('');
    const [docCURP, setDocCURP] = useState('');
    const [docRFC, setDocRFC] = useState('');
    const [docNSS, setDocNSS] = useState('');
    const [docEmail, setDocEmail] = useState('');
    const [docPass, setDocPass] = useState('');
    const [docPassConf, setDocPassConf] = useState('');
    const [ID, setID] = useState('');
    //let doctor: DoctorInfo = {} as DoctorInfo;
    const [doctor, setDoctor] = useState<DoctorInfo | null>(null);
    const [doctores, setDoctores] = useState<DoctorInfo[]>([]);
    const [nextId, setNextId] = useState(1); // Initial ID

    const handleAddDoctor = () => {
        setAddNewDoctor(!addNewDoctor);
        setKeepAdding(false);
        setDocName('');
        setDocPLastName('');
        setDocMLastName('');
        setDocCURP('');
        setDocRFC('');
        setDocNSS('');
        setDocEmail('');
        setDocPass('');
        setDocPassConf('');
    }

    const handleKeepAdding = () => {
        if (docName && docPLastName && docMLastName && docCURP && docRFC && docNSS) {
            setKeepAdding(!keepAdding);
        } else {
            alert('Por favor llene todos los campos');
        }
    }

    const handleSearchDoctor = () => {
        setSearchDoctor(!searchDoctor);
        setID('');
        setDoctor(null);
    }

    // const handleSearchDoctorID = async (id: number): Promise<void> => {
    //     try {
    //         const doctor: DoctorInfo = await getEspecificDoc(id);
    //         setDoctor(doctor);
    //     } catch (error) {
    //         console.error('Error fetching doctor:', error);
    //         setDoctor(null);
    //     }
    // };
    
    const handleFinishAdding = () => {
        if (docEmail && docPass && docPassConf) {
            if (validateEmail(docEmail)) {
                if (docPass === docPassConf) {
                    const newDoctor: DoctorInfo = {
                        id: nextId,
                        nombre: docName,
                        aPaterno: docPLastName,
                        aMaterno: docMLastName,
                        curp: docCURP,
                        rfc: docRFC,
                        numSeguro: docNSS,
                        status: true
                    };
                    setDoctores([...doctores, newDoctor]);
                    setNextId(nextId + 1); // Increment the ID for the next doctor
                    alert('Doctor agregado exitosamente');
                    setAddNewDoctor(false);
                    setKeepAdding(false);
                    setDocName('');
                    setDocMLastName('');
                    setDocPLastName('');
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

    const handleSearchDocID = async () => {
        if (!ID.trim()) {
            alert('Ingrese un valor válido de búsqueda por ID');
            setID('');
            return;
        }

        const IDInt = parseInt(ID);
        if (isNaN(IDInt)) {
            alert('El ID debe ser un número');
            setID('');
            return;
        }

        var doc = await getEspecificDoc(IDInt);
        if (!doc) {
            alert('Doctor no encontrado');
        }else{
            setDoctor(doc);
        }
    }

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSuspendDoctor = () => {
        if (doctor) {
            const espDoc = doctores.filter(doc => doc.id !== doctor.id);
            setDoctores(espDoc);

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
                                            <label className='settText'>Apellido Paterno: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputDocSettings'
                                                value={docPLastName}
                                                required
                                                onChange={(e) => setDocPLastName(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='settFields'>
                                            <label className='settText'>Apellido Materno: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputDocSettings'
                                                value={docMLastName}
                                                required
                                                onChange={(e) => setDocMLastName(e.target.value)}
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
                            <Row className='settingsRow'>
                                <Col>
                                    <h3 className='settingsSearchSubtitle'>Buscar Doctor</h3>
                                </Col>
                            </Row>
                            <Row className='insertDataRow'>
                                <Col xs={0} md={1}></Col>
                                <Col xs={12} md={10}>
                                    <Row>
                                        <Col>
                                            <label className='insertDataText'>Ingrese el ID del doctor:</label>
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
                                        id = {doctor.id}
                                        nombre = {doctor.nombre}
                                        aPaterno ={doctor.aPaterno}
                                        aMaterno = {doctor.aMaterno}
                                        curp = {doctor.curp}
                                        rfc = {doctor.rfc}
                                        numSeguro = {doctor.numSeguro}
                                        status = {doctor.status}
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