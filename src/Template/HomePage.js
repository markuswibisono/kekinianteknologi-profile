

import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';

import { Card, Button, Container, Row, Col, Nav, Navbar  } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import backgroundCard2 from "../assets/img/kotlin-logo.png";

import backgroundCard3 from "../assets/img/react-js-logo.png";

import backgroundCard4 from "../assets/img/mysql-logo.jpg";

import backgroundCard5 from "../assets/img/ci-logo.png";

function HomePage() {

  return (
    <>
        <Card>
          <Card.Body style={{ marginLeft: '4rem' }}>
            <Card.Title><b>Selamat Datang di </b><span style={{ color: 'blue' }}>KekinianTeknologi.</span></Card.Title>
            <Card.Text>
              KekinianTeknologi merupakaan perusahan yang bergerak di bidang IT yang menyediakaan 
              jasa pembuataan berbasis Android dan Web
            </Card.Text>
            <Button variant="primary">Get Started</Button>
          </Card.Body>
        </Card>

        <Container style={{ marginTop: '5rem' }}>
          <Card.Title style={{ color: 'blue' }}>Services</Card.Title>
        <br/>
        <br/>
        <Row>
            <Col sm>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
              <Card.Img variant="top" src={backgroundCard2} />
                <Card.Body>
                  <Card.Title>Android Aplication</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
           <Card.Img variant="top" src={backgroundCard3} />
                <Card.Body>
                  <Card.Title>Web Aplication</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
                <Card.Img variant="top" src={backgroundCard5} />
                  <Card.Body>
                    <Card.Title>Backend Service</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm>
            <Card className="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
           <Card.Img variant="top" src={backgroundCard4} />
                <Card.Body>
                  <Card.Title>Database</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
    </>

  );
}

export default HomePage;
