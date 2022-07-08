

import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';


import { Container, Card,  Row, Col} from 'react-bootstrap';

import fotoProfil from "../assets/img/foto_profil2.jpg";

function TeamsPage() {

  return (
    <>
        <Container style={{ marginTop: '5rem' }}>
            <Card.Title style={{ color: 'blue' }}>Team</Card.Title>
            <br />
            <Row xs={2} md={3}>
              <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={fotoProfil}  />
                <Card.Body>
                  <Card.Title>Programmer</Card.Title>
                  <Card.Text>
                        Nama : Markus Wibisono <br />
                        Contact : 08881283981 <br />
                        Email : markuswibisono@outlook.co.id
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
          </Row>
        </Container>
    </>
  );
}

export default TeamsPage;
