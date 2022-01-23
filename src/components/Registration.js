import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { useState } from 'react';
import Swal from 'sweetalert2';

function Registration() {
    const [emailaddress, setEmailAddress] = useState("");
    const [passwordd, setPasswordd] = useState("");
    const [username, setUsername] = useState("");

    function clearDetails() {
        setUsername("");
        setPasswordd("");
        setEmailAddress("")
    }

    async function userPost() {
        console.log(username, emailaddress, passwordd);
        const userDetails = {
            "username": username,
            "email": emailaddress,
            "password": passwordd

        }
        console.log(userDetails);
        const response = await axios.post('http://localhost:5000/user-register', userDetails).then((data) =>
            {Swal.fire({
                title: `<strong> ${data.data.message}</strong>`,
                icon: 'success',
                showCloseButton: true,

            });
            
            clearDetails()})
            
            .catch((err) => Swal.fire({
                title: `<strong>${err.message}</strong>`,
                icon: 'error',
                showCloseButton: true,

            }));


        //await axios.post('http://localhost:5000/user-register', userDetails);  you can also use it without const response
        // console.log(response);
        //    setUsername("");
        //    setPasswordd("");
        //    setEmailAddress(""); 

       
    }

    return (
        <div>
            <Container style={{ padding: "7%" }}>
                <Form>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} placeholder="User Name" />

                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={emailaddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={passwordd} onChange={(e) => setPasswordd(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" onClick={userPost}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}


export default Registration;