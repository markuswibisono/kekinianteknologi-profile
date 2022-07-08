
//import 'bootstrap/dist/css/bootstrap.min.css';


import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';

import { Card, Button, Container, Row, Col  } from 'react-bootstrap';

import backgroundCard1 from "../assets/dashboard-banner.jpg";

import backgroundCard2 from "../assets/kotlin-logo.png";

import backgroundCard3 from "../assets/react-js-logo.png";

import backgroundCard4 from "../assets/mysql-logo.jpg";

import backgroundCard5 from "../assets/ci-logo.png";

function TestPage() {

  return (
    <>
       <section id="topbar" class="d-flex align-items-center">
        <div class="container d-flex justify-content-center justify-content-md-between">
            <div class="contact-info d-flex align-items-center">
            <i class="bi bi-phone d-flex align-items-center ms-4"><span>08881283981</span></i>
          </div>
        </div>
    </section>
        <header id="header" class="d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
            <h1 class="logo"><a href="index.html">KekinianTeknologi<span>.</span></a></h1>
              <nav id="navbar" class="navbar">
                <ul>
                  <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a class="nav-link scrollto" href="#about">About</a></li>
                  <li><a class="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                  <li><a class="nav-link scrollto" href="#team">Team</a></li>
                  <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
              </nav>
        </div>
    </header>
        <Card style={{ width: '100rem', height: '10rem', marginTop: '2rem' }}>
          <Card.Body style={{ marginLeft: '4rem' }}>
            <Card.Title><b>Selamat Datang di </b>KekinianTeknologi</Card.Title>
            <Card.Text>
              KekinianTeknologi merupakaan perusahan yang bergerak di bidang IT yang menyediakaan 
              jasa pembuataan berbasis Android dan Web
            </Card.Text>
            <Button variant="primary">Get Started</Button>
          </Card.Body>
        </Card>
        <Container style={{ marginTop: '5rem' }}>
          <div style={{ marginLeft: '30rem', color:'blue', fontSize: '20px' }} >Service</div>
          <br/>
          <Row>
            <Col xs={3} md={3}>
              <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
              <Card.Img variant="top" src={backgroundCard2} />
                <Card.Body>
                  <Card.Title>Android Aplication</Card.Title>
                </Card.Body>
              </Card>
            </Col>
           <Col xs={3} md={3}>
           <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
           <Card.Img variant="top" src={backgroundCard3} />
                <Card.Body>
                  <Card.Title>Web Aplication</Card.Title>
                </Card.Body>
              </Card>
          </Col>
          <Col xs={3} md={3}>
          <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
          <Card.Img variant="top" src={backgroundCard5} />
                <Card.Body>
                  <Card.Title>Backend Service</Card.Title>
                </Card.Body>
              </Card>
          </Col>
          <Col xs={3} md={3}>
          <Card class="shadow-sm p-3 mb-5 bg-white rounded" style={{ width: '15rem' }}>
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

export default TestPage;
