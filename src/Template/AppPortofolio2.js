
import 'bootstrap/dist/css/bootstrap.min.css';

import icon_playstore from "../assets/img/icon_playstore_crop.png";

import splash_screen from "../assets/img/splash-screen.jpg";

import detail_screen from "../assets/img/detail_barang.jpg";

import form_kredit from "../assets/img/form_kredit_app.jpg";

import { Card, Row, Col  } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function AppPortofolio2() {


  return (
    <>
    <Card style={{ width: '20rem', marginTop: '2rem' }}>
        <Card.Body>
            <Card.Title>Aplikasi android: <b>Klub Kebugaraan</b></Card.Title>
                <Card.Text>

                         Aplikasi Klub Kebugaraan adalah aplikasi yang menghubungkan 6 Club Fitness.<br />
                        <br></br>
                        Aplikasi ini dilengkapi dengan layanan 

                        <b>Fitur aplikasi:</b>

                        <br />

                        <br />

                        <Row>
                          <Col sm>
                          <Card style={{ width: '8rem', marginTop:'2rem' }}>
                             <Card.Img variant="top"   src={splash_screen}  />

                          </Card>
                          </Col>


                          <Col sm>

                          <Card style={{ width: '8rem', marginTop:'2rem' }}>
                             <Card.Img variant="top"   src={detail_screen}  />

                          </Card>

                          </Col>
                          
                          <Col sm>


                          <Card style={{ width: '8rem', marginTop:'2rem' }}>
                             <Card.Img variant="top"   src={form_kredit}  />

                          </Card>


                          </Col>
                       </Row>

                        <br />

                        <br />
                        Download di 
                        
                        <br />

                        <br />

                        <a href='https://play.google.com/store/apps/details?id=com.portofolio.testingapp2'>
                           <img  src={icon_playstore}  width="50%" height="30%" />
                        </a>


                </Card.Text>
        </Card.Body>
    </Card>

    </>
  );
}

export default AppPortofolio2;
