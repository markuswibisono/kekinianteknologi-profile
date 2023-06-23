
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Card,  Row, Col} from 'react-bootstrap';

import splashscreen from "../assets/img/splash-screen.jpg";

import splashscreen2 from "../assets/img/logo-megagym.jpeg";

import logo_whatsApp from '../assets/img/whatsapp-icon.png';

import { Link } from 'react-router-dom';
import {  Nav } from 'react-bootstrap';


function PortofolioPage( props ) {


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

  
  if(props.menudata == "portofolio") {
    return (
      <>
    
        <Container style={styleContainer}>

        <div style={styleLogoWhatsApp}>
              <a style= {{ textDecoration: 'none', color: 'black'}}  href='https://api.whatsapp.com/send?phone=+628881283981&text=mau tanya, tentang harga jasa pembuataan web dan aplikasi android di PT. Kekinian Tekno Nusantara?'>
                <img src={logo_whatsApp} width="100" height="80" />
                  &nbsp;Hubungi Kami </a>
            </div>
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

  else {
    return (
      <>
    
        <Container style={{ marginTop: '10%' }}>
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
  

}

export default PortofolioPage;
