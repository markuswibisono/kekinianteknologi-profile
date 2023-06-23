

import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';


import { Container, Card,  Row, Col} from 'react-bootstrap';

import fotoProfil from "../assets/img/foto_profil2.jpg";

import logo_whatsApp from '../assets/img/whatsapp-icon.png';


function TeamsPage( props ) {

  
  const styleContainer = {
    height: '100%',
    margin: '0',
    fontFamily: 'Arial, Helvetica, sans-serif',
    marginTop: '10%'
  };


  const styleLogoWhatsApp = {
    backgroundColor: 'rgb(0,0,0)',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '120%',
    border: '10px solid #f1f1f1',
    position: 'fixed',
    top: '60%',
    left: '70%',
    transform: ' translate(-50%, -50%)',
    zIndex: '2',
    width: '80%'
  };

  if(props.menudata == "teams") {

    return (
      <>
          <Container style={styleContainer}>
              <div style={styleLogoWhatsApp}>
              <a style= {{ textDecoration: 'none', color: 'black'}}  href='https://api.whatsapp.com/send?phone=+628881283981&text=mau tanya, tentang harga jasa pembuataan web dan aplikasi android di PT. Kekinian Tekno Nusantara?'>
                <img src={logo_whatsApp} width="100" height="80" />
                  &nbsp;Hubungi Kami </a>
            </div>

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

  else {

    return (
      <>
          <Container style={{ marginTop: '10%' }}>
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

}

export default TeamsPage;
