import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios"; 
import {useState, useEffect} from 'react';


function AllCardFetch() {
const [data, setData] = useState([]);

useEffect(async() => {
    try {
        const response = await axios.get('http://localhost:5000/foods');
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
},[]);
    // Want to use async/await? Add the `async` keyword to your outer function/method.
//async function getFoods() {
    // try {
    //   const response = await axios.get('http://localhost:5000/foods');
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
  //}
    return (

        <div>

            <h1 style={{margin:"5%", alighText:"center"}}>For Your Fresh Chicken With Hot Papper</h1>
            <Carousel variant="dark">
            <Carousel.Item>
                <Container fluid style={{ padding: "5%", background: "yellow" }}>
                    <Row style={{ textAlign: "center" }}>
                        {data.map((chicken) =>
                            <Col id={chicken.id} key={chicken.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                                
                                    <Card style={{ width: '18rem',cursor:"pointer"}} onClick={()=> window.location.href="/chick/"+chicken.id }>
                                        <Card.Img variant="top" src={chicken.image} />
                                        <Card.Body>
                                            <Card.Title>{chicken.title}</Card.Title>
                                            <Card.Text>
                                                {chicken.ganished}
                                            </Card.Text>
                                            <Button variant="primary">{chicken.request}</Button>
                                        </Card.Body>
                                    </Card>

                               
                            </Col>
                            )}
                    </Row>
                </Container>
                </Carousel.Item>

                <Carousel.Item>
                <Container fluid style={{ padding: "5%", background: "brown" }}>
                    <Row style={{ textAlign: "center" }}>
                        {data.map((chicken) =>
                            <Col id={chicken.id} key={chicken.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                                
                                    <Card style={{ width: '18rem',cursor:"pointer"}} onClick={()=> window.location.href="/chick/"+chicken.id }>
                                        <Card.Img variant="top" src={chicken.image} />
                                        <Card.Body>
                                            <Card.Title>{chicken.title}</Card.Title>
                                            <Card.Text>
                                                {chicken.ganished}
                                            </Card.Text>
                                            <Button variant="primary">{chicken.request}</Button>
                                        </Card.Body>
                                    </Card>

                               
                            </Col>
                            )}
                    </Row>
                </Container>
                </Carousel.Item>

                <Carousel.Item>
                <Container fluid style={{ padding: "5%", background: "orange" }}>
                    <Row style={{ textAlign: "center" }}>
                        {data.map((chicken) =>
                            <Col id={chicken.id} key={chicken.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                                
                                    <Card style={{ width: '18rem', width: '18rem',cursor:"pointer"}} onClick={()=> window.location.href="/chick/"+chicken.id }>
                                        <Card.Img variant="top" src={chicken.image} />
                                        <Card.Body>
                                            <Card.Title>{chicken.title}</Card.Title>
                                            <Card.Text>
                                                {chicken.ganished}
                                            </Card.Text>
                                            <Button variant="primary">{chicken.request}</Button>
                                        </Card.Body>
                                    </Card>

                               
                            </Col>
                            )}
                    </Row>
                </Container>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}
export default AllCardFetch;