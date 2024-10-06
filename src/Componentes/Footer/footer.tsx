import './footer.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <div className="footer">
            <Container fluid>
                <Row>
                    <Col className="txt">
                        <p>Todos los derechos reservados ©</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;