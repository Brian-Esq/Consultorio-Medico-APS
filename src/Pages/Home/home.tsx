import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(){
    return(
        <main className='homeDiv'>
            <Container className='middleDiv'>
                <Row>
                    <Col>
                        <h2 className='welcome'>Bienvenidos a</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className='sysTitle'>MediSys</h1>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Home;