import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
function Footer() {
    return (
      <div style={{backgroundColor:'#1F2533',color:'#3C484A'}}>
      <Container fluid>
        <Row>
          <Col>
        <a href='#'>Phone: 0704656454656</a>
        <br/>
        <BsFillTelephoneFill/>
          </Col>
          <Col>
          <a href='#'>Adress: 1 yemi olabinjo street, lagos</a>
          <br/>
          <BsGlobe/>
          </Col>
          <Col>
          <a href='#'>information: 0704656454656</a>
          
          <br/>
          <BsFillPeopleFill/>
          </Col>
           
        </Row>

      </Container>
      
      </div>
    );
  }
  
  export default Footer;