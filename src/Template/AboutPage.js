
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
      <Container style={{ marginTop: '5rem' }}>
      <Card.Title style={{ color: 'blue' }}>About</Card.Title>
            <br />
            <Row xs={2} md={3}>
              <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ruangKantor}  />
                <Card.Body>
                  <Card.Text>
                      Perusahaan kami menyediakaan jasa pembuataan web dan aplikasi android<br />
                    yang mencakup: 
                    <br />
                    <br />
                    <ListGroup>
                      <ListGroup.Item>Web Company Profile</ListGroup.Item>
                      <ListGroup.Item>Web Data Management</ListGroup.Item>
                      <ListGroup.Item>Aplikasi Android <br />untuk mendukung management</ListGroup.Item>
                  </ListGroup>
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
