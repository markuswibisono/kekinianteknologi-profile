

import '../assets/vendor/aos/aos.css';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/vendor/boxicons/css/boxicons.min.css';
import '../assets/vendor/glightbox/css/glightbox.min.css';
import '../assets/vendor/swiper/swiper-bundle.min.css';
import '../assets/css/style.css';


import axios from 'axios';

import { Card, Container, Row, Col, Form, Button  } from 'react-bootstrap';

import { useState, React  } from 'react';

import tempatkantor from "../assets/img/summarecon-logo.jpg";



function ContactPage() {

  //const cors = require("cors");
  //const [flagspan] = "ada";

  //const unreadMessages = "";

  const [state, setState] = useState("");
  const handleSubmit = (event) => {


    event.preventDefault();

    var postData = new FormData();
    postData.append("nama", event.target.namaCust.value);
    postData.append("alamat", event.target.alamatCust.value);
    postData.append("nohp", event.target.noHpCust.value);
    postData.append("email", event.target.emailCust.value);
    
    axios.post('http://kekinianteknologi.com/kekinianteknologi.com/kekinianprofile/restapi/index.php/InputProfile', postData, 
    { mode: 'no-cors', crossdomain: true  }
    )
    
    .then(res => {

      console.log(res);
      
      setState("Data sudah terkirim, silahkan check email anda.");


    }, (error) => {
       console.log(error.response.data);
    });

      //alert(event.target.namaCust.value);

    }

 

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
                         <b>Contact: 08881283981</b>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>

                <Card style={{  marginLeft: '2rem', width: '30rem' }}>
                  <Card.Title>Tinggalkan pesan jika anda tertarik atau ingin tau lebih lanjut perusahaan kami, pihak sales akan menghubungi</Card.Title>
                  <Card.Body>
                    <Card.Text>
                    
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Nama: </Form.Label>
                          <Form.Control type="text" name="namaCust" placeholder="john smith" />

                          <br />
                          
                          <Form.Label>Alamat: </Form.Label>
                          <Form.Control type="text" name="alamatCust" placeholder="jl summarecon bekasi" />

                          <br />

                          <Form.Label>No Handphone: </Form.Label>
                          <Form.Control type="number" name="noHpCust" placeholder="08123xxx" />

                          <br />


                          <Form.Label>Email: </Form.Label>
                          <Form.Control type="email" name="emailCust" placeholder="markus@kekinianteknologi.com" />

                          <br/>

                          <Button variant="primary" type="submit">
                              Submit
                          </Button>

                          
                              
                              
                              <span style={{ marginLeft: '1rem', color: 'green' }}>
                                  {state}
                              </span>
                              
                         
                        </Form.Group>

                        </Form>


                        
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
