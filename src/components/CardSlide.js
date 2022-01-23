import Carousel from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./card.json";
  
  function  CardSlide() {
     return( 
      <div>
          <Row>
              <Col xs={6} md={6} lg={12}>
<h2>Premiers</h2>
</Col>
</Row>
           <Carousel >
      <Carousel.Item interval={1000}>

<Container fluid style={{padding:"5%", background:"green"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) =>
                        <Col id={mov.id} key={mov.id} xs={6} md={2} lg={3} style={{marginBottom:"2%"}}>
                            <Card>
                                <Card.Img variant="top" src={mov.image} />
                                <Card.Body>
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
            </Carousel.Item>

            <Carousel.Item interval={500}>

<Container fluid style={{padding:"5%", background:"pink"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) =>
                        <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                            <Card >
                                <Card.Img variant="top" src={mov.image} />
                                <Card.Body>
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
            </Carousel.Item>

            <Carousel.Item interval={1000}>

<Container fluid style={{padding:"5%", background:"blue"}}>
                <Row style={{textAlign:"center"}}>
                    {data.map((mov) =>
                        <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginBottom:"2%"}}>
                        <Card>
                                <Card.Img variant="top" src={mov.image} />
                                <Card.Body>
                                <Card.Title>{mov.title}</Card.Title>
                                <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
            </Carousel.Item>
        </Carousel>
      
      </div>
     ) 
    
  }
  
  export default  CardSlide;