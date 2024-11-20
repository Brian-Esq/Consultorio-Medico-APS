import './login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

interface User {
    id:number;
    user: string;
    accountType: string;
  }

interface LoginProps {
    onLogin: (user:User) => void;
}

const Login = ({ onLogin }: LoginProps) => {
    const navigate = useNavigate();
    const [User, setUser] = useState('');
    const [Password, setPassword] = useState('');
    const [NewUser, setNewUser] = useState('');
    const [NewPass, setNewPass] = useState('');
    const [ConfNewPass, setConfNewPass] = useState('');
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = async () => {
        if (User && Password) {
            try {
                const response = await axios.post('https://localhost:7215/api/Auth', {
                        email: User,
                        password: Password,
                    }
                );
                if (response.data.ok) {
                    const data = response.data;
                    const user: User = { id:data.id, user: User , accountType: data.accountType};
                    onLogin(user); // Notify the parent component of the login
                    setUser('');
                    setPassword('');
                    navigate('/'); // Redirect to the home page or dashboard
                } else {
                    const error = response.data.message;
                    alert(error || 'Login invalido');
                }
            } catch (error) {
                alert('Login incorrecto, verifique sus datos');
            }
        } else {
            alert('Por favor ingrese un usuario y contraseña');
        }
    };

    const toggleCreateAccount = () => {
        setIsCreatingAccount(!isCreatingAccount);
    }

    const handleCreateAccount = async () => {
        if (NewUser && NewPass && ConfNewPass) {
            if (validateEmail(NewUser)) {
                if (NewPass === ConfNewPass) {
                    try {
                        const response = await axios.post('https://localhost:7215/api/Auth/new', {
                                correo: NewUser,
                                contraseña: NewPass,
                            }
                        );

                        if (response.data.ok) {
                            alert('Cuenta creada exitosamente');
                            setIsCreatingAccount(false);
                            setNewUser('');
                            setNewPass('');
                            setConfNewPass('');
                        } else {
                            const error = response.data.message;
                            alert(error || 'Error al crear la cuenta');
                        }
                    } catch (error) {
                        alert('Sucedio un error al crear la cuenta');
                    }
                } else {
                    alert('Las contraseñas no coinciden');
                    setNewPass('');
                    setConfNewPass('');
                }
            } else {
                alert('Por favor ingrese un correo válido');
            }
        } else {
            alert('Por favor llene todos los campos');
        }
    };

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
                                                required
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
                                                required
                                                type='password' // Change input type to password
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
                                                required
                                                type='password' // Change input type to password
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
                                                required
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
                                                required
                                                type='password' // Change input type to password
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