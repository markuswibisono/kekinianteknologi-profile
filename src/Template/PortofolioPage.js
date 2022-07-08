
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Card,  Row, Col} from 'react-bootstrap';

import portfolio from "../assets/img/portofolio-app.jpg";


function handleClick() {

  alert("testing portofolio page");

}

function PortofolioPage() {


  return (
    <>
  
      <Container style={{ marginTop: '5rem' }}>
            <Card.Title style={{ color: 'blue' }}>Portofolio</Card.Title>
            <br />
            <Row xs={2} md={3}>
              <Col>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={portfolio}  />
                <Card.Body>
                  <Card.Title>Aplikasi android: JagoanMokas</Card.Title>
                  <Card.Text>
                        JagoanMokas adalah aplikasi jual beli motor bekas <br />
                        secara online yang terhubung dengan <br />
                        pembayaraan virtual account <br /><a href="#" onClick={handleClick}>lihat selengkapnya </a>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
          </Row>
      </Container>
    </>
  );
}

export default PortofolioPage;
