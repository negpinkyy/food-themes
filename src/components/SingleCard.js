import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import data from "./chick.json";
import { useParams } from "react-router";

function SingleCard() {
    const { food } = useParams();
    return (
        <div>

            <h1 style={{ margin: "5%", alighText: "center" }}>For Your Fresh Chicken With Hot Papper</h1>

            <Container fluid style={{ padding: "5%", background: "yellow" }}>
                <Row style={{ textAlign: "center" }}>
                    {data.map((chicken) => {

                        if (chicken.id === food) {
                            return (
                                <Col id={chicken.id} key={chicken.id} xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>

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
                    })}
                </Row>
            </Container>

        </div>

    );
}


export default SingleCard;