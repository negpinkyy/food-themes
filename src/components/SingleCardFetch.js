import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from 'react';


 function SingleCardFetch() {
    const { foodid } = useParams();
    const [singledata, setSingleData] = useState([]);

     useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:5000/food/${foodid}`);
            console.log(response);
            setSingleData([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, []);
    return (
        <div>

            <h1 style={{ margin: "5%", alighText: "center" }}>For Your Fresh Chicken With Hot Papper</h1>

            <Container fluid style={{ padding: "5%", background: "yellow" }}>
                <Row style={{ textAlign: "center" }}>
                    {singledata.map((chicken) => {
                        return (
                            <Col id={chicken._id} key={chicken._id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
                                <Card style={{ width: '18rem' }}>
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

                        )
                    }
                    )}
                </Row>
            </Container>

        </div>

    );
}


export default SingleCardFetch;