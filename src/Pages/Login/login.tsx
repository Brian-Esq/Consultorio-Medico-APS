import './login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/');
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
                            <Row>
                                <Col className='loginFields'>
                                    <label className='LoginText'>Usuario: </label>
                                </Col>
                                <Col>
                                    <input name='LoginUser'
                                        autoComplete='off'
                                        className='inputLogin'
                                        inputMode='numeric'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label className='LoginText'>Contraseña: </label>
                                </Col>
                                <Col>
                                    <input name='LoginUser'
                                        autoComplete='off'
                                        className='inputLogin'
                                        inputMode='numeric'
                                    />
                                </Col>
                            </Row>
                            <Row className='buttonsRow'>
                                <Col>
                                    <button className='createAccBot'>Crear Cuenta</button>
                                </Col>
                                <Col>
                                    <button className='LoginBut' onClick={() => handleLogin()}>Iniciar Sesión</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;