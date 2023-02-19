
import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';

import { Card, Container, Row, Col, ListGroup  } from 'react-bootstrap';

import ruangKantor from "../assets/img/ruangkantor.jpg";

function AboutPage() {

  return (
    <>
      <Container id="about" style={{ marginTop: '5rem' }}>
      <Card.Title style={{ color: 'blue' }}>About</Card.Title>
            <br />
            <Row xs={2} md={3}>
              <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ruangKantor}  />
                <Card.Body>
                  <Card.Text>
                      Perusahaan kami berdiri 13 Febuari 2023 yang terletak Apartment The Spring Lake, Jl Sentra Summarecon Bekasi,
                      Jl. Boulevard Ahm MargaMulya, Bekasi Utara Kota Bekasi Jawa Barat.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
          </Row>
      </Container>
    </>
  );
}

export default AboutPage;
