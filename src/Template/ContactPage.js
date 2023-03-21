

import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';




import { Card, Container, Row, Col, Form, Button  } from 'react-bootstrap';

import { React  } from 'react';

import tempatkantor from "../assets/img/summarecon-logo.jpg";

function ContactPage() {
  return (
    <>
      <Container style={{ marginTop: '5rem' }}>
      <Card.Title style={{ color: 'blue' }}>Contact</Card.Title>
            <br />
            <Row xs={2} md={3}>
              <Col>
              <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={tempatkantor}  />
                <Card.Body>
                  <Card.Text>
                        Apartemen The Springlake Summarecon Bekasi, Jl. Bulevar Ahmad Yani,
                         RT.005/RW.003, Marga Mulya, Kec. Bekasi Utara, 
                         Kota Bks, Jawa Barat 17142 <br />
                         <b>Contact: 08881283981ss</b>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
          </Row>
      </Container>
    </>

  );
}

export default ContactPage;
