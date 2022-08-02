
import 'bootstrap/dist/css/bootstrap.min.css';

import icon_playstore from "../assets/img/icon_playstore_crop.png";

import splash_screen from "../assets/img/splash-screen.jpg";

import detail_screen from "../assets/img/detail_barang.jpg";

import form_kredit from "../assets/img/form_kredit_app.jpg";

import { Card, Row, Col  } from 'react-bootstrap';

function AppPortofolio() {


  return (
    <>
    <Card style={{ width: '20rem', marginLeft: '10rem', marginTop: '2rem' }}>
        <Card.Body>
            <Card.Title>Aplikasi android: <b>JagoanMokas</b></Card.Title>
                <Card.Text>

                        JagoanMokas adalah aplikasi jual beli motor bekas <br />
                        secara online yang terhubung dengan <br />
                        pembayaraan virtual account <br />

                        <b>Fitur aplikasi:</b>

                        <br />

                        <br />

                        <Row>
                          <Col sm>
                          <Card style={{ width: '8rem' }}>
                             <Card.Img variant="top"   src={splash_screen}  />

                          </Card>
                          </Col>


                          <Col sm>

                          <Card style={{ width: '8rem' }}>
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

                        <img  src={icon_playstore}  width="50%" height="30%" />


                </Card.Text>
        </Card.Body>
    </Card>

    </>
  );
}

export default AppPortofolio;
