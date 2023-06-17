
import 'bootstrap/dist/css/bootstrap.min.css';

import icon_playstore from "../assets/img/icon_playstore_crop.png";

import splash_screen from "../assets/img/logo-megagym.jpeg";

import layanan_club_fitness from "../assets/img/layanan-clubfitness.jpeg";

import kelas_per_club from "../assets/img/kelas-per-club.jpeg";

import fasilitas_umum_club from "../assets/img/fasiltas-umum-club.jpeg";


import { Card, Row, Col  } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function AppPortofolio2() {


  return (
    <>
    <Card style={{ width: '20rem', marginTop: '2rem' }}>
        <Card.Body>
            <Card.Title>Aplikasi android: <br></br> 
                     <b>Klub Kebugaraan</b>
            </Card.Title>
                <Card.Text>

                         Aplikasi Klub Kebugaraan adalah aplikasi yang menghubungkan 6 Club Fitness.<br />
                        <br></br>
                        Aplikasi ini dilengkapi dengan layanan

                        <br></br>

                        <b>Sebagai Berikut:</b>

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
                             <Card.Img variant="top"   src={layanan_club_fitness}  />

                          </Card>

                          </Col>
                          
                          <Col sm>


                          <Card style={{ width: '8rem', marginTop:'2rem' }}>
                             <Card.Img variant="top"   src={kelas_per_club}  />

                          </Card>


                          </Col>

                                
                          <Col sm>


                          <Card style={{ width: '8rem', marginTop:'2rem' }}>
                             <Card.Img variant="top"   src={fasilitas_umum_club}  />

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
