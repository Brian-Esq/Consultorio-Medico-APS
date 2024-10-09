import './login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface LoginProps {
    onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
    const navigate = useNavigate();
    const [User, setUser] = useState('');
    const [Password, setPassword] = useState('');
    const [NewUser, setNewUser] = useState('');
    const [NewPass, setNewPass] = useState('');
    const [ConfNewPass, setConfNewPass] = useState('');
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const handleLogin = () => {
        if (User && Password) {
            onLogin();
            setUser('');
            setPassword('');
            navigate('/');
        } else {
            setUser('');
            setPassword('');
            alert('Por favor ingrese un usuario y contraseña');
        }
    }

    const toggleCreateAccount = () => {
        setIsCreatingAccount(!isCreatingAccount);
    }

    const handleCreateAccount = () => {
        if (NewUser && NewPass && ConfNewPass) {
            if (NewPass === ConfNewPass) {
                alert('Cuenta creada exitosamente');
                setIsCreatingAccount(false);
                setNewUser('');
                setNewPass('');
                setConfNewPass('');
            } else {
                alert('Las contraseñas no coinciden');
                setNewPass('');
                setConfNewPass('');
            }
        } else {
            alert('Por favor llene todos los campos');
            setNewUser('');
            setNewPass('');
            setConfNewPass('');
        }
    }

    return (
        <Container className='LoginPage'>
            <Row className='mainLoginRow'>
                <Col>
                    <Row>
                        <Col>
                            <h2 className='welcomeLogin'>Bienvenidos a</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className='sysTitleLogin'>MediSys</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='loginCard'>
                            {isCreatingAccount ? (
                                <>
                                    <Row>
                                        <Col className='loginFields'>
                                            <label className='LoginText'>Correo: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewUser'
                                                autoComplete='off'
                                                className='inputLogin'
                                                value={NewUser}
                                                onChange={(e) => setNewUser(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='loginFields'>
                                            <label className='LoginText'>Contraseña: </label>
                                        </Col>
                                        <Col>
                                            <input name='NewPass'
                                                autoComplete='off'
                                                className='inputLogin'
                                                value={NewPass}
                                                onChange={(e) => setNewPass(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='loginFields'>
                                            <label className='LoginText'>Confirmar contraseña: </label>
                                        </Col>
                                        <Col>
                                            <input name='ConfNewPass'
                                                autoComplete='off'
                                                className='inputLogin'
                                                value={ConfNewPass}
                                                onChange={(e) => setConfNewPass(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </>
                            ) : (
                                <>
                                    <Row>
                                        <Col className='loginFields'>
                                            <label className='LoginText'>Correo: </label>
                                        </Col>
                                        <Col>
                                            <input name='LoginUser'
                                                autoComplete='off'
                                                className='inputLogin'
                                                value={User}
                                                onChange={(e) => setUser(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='loginFields'>
                                            <label className='LoginText'>Contraseña: </label>
                                        </Col>
                                        <Col>
                                            <input name='LoginPass'
                                                autoComplete='off'
                                                className='inputLogin'
                                                value={Password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </Col>
                                    </Row>
                                </>
                            )}
                            {!isCreatingAccount && (
                                <Row className='buttonsRow'>
                                    <Col>
                                        <button className='createAccBot' onClick={toggleCreateAccount}>Crear Cuenta</button>
                                    </Col>
                                    <Col>
                                        <button className='LoginBut' onClick={handleLogin}>Iniciar Sesión</button>
                                    </Col>
                                </Row>
                            )}
                            {isCreatingAccount && (
                                <Row className='buttonsRow'>
                                    <Col>
                                        <button className='cancelCreateAccBot' onClick={toggleCreateAccount}>Cancelar</button>
                                    </Col>
                                    <Col>
                                        <button className='createAccBot' onClick={handleCreateAccount}>Crear Cuenta</button>
                                    </Col>
                                </Row>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;