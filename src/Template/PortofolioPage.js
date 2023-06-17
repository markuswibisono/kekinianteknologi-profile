
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Card,  Row, Col} from 'react-bootstrap';

import splashscreen from "../assets/img/splash-screen.jpg";

import splashscreen2 from "../assets/img/logo-megagym.jpeg";

import { Link } from 'react-router-dom';
import {  Nav } from 'react-bootstrap';


function PortofolioPage() {

  
  return (
    <>
  
      <Container style={{ marginTop: '5rem' }}>
            <Card.Title style={{ color: 'blue' }}>Portofolio</Card.Title>
            <br />
            <Row xs={2} md={3}>
              <Col>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={splashscreen}  />
                <Card.Body>
                  <Card.Title>Aplikasi android: <b>JagoanMokas</b></Card.Title>
                  <Card.Text>
                        JagoanMokas adalah aplikasi jual beli motor bekas <br />
                        secara online yang terhubung dengan <br />
                        pembayaraan virtual account <br />
                        <Nav.Link componentClass={Link} href="/kekinianteknologi-profile/#/aboutportofolio" to="/kekinianteknologi-profile/#/aboutportofolio">Lihat Selengkapnya..</Nav.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
          </Row>
          <br></br>
          <Row xs={2} md={3}>
          <Col>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={splashscreen2}  />
                <Card.Body>
                  <Card.Title>Aplikasi android: <br></br>
                  <b>Klub Kebugaraan</b></Card.Title>
                  <Card.Text>
                         Aplikasi yang bekerja sama dengan 6 Klub Fitness. Aplikasi ini di lengkapi dengan fitur untuk melihat 
                         <br></br> Jadwal Kelas dan Fasilitas yang di sediakan untuk masing-masing Klub
                         <br></br> dan di lengkapi dengan fitur WhatsApp yang langsung terhubung dengan marketing.
                         <Nav.Link componentClass={Link} href="/kekinianteknologi-profile/#/aboutportofolio2" to="/kekinianteknologi-profile/#/aboutportofolio2">Lihat Selengkapnya..</Nav.Link>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
          </Row>
      </Container>
    </>
  );
}

export default PortofolioPage;
