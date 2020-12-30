import React from 'react';
import {Container, Row, Col, Card, ListGroup, Jumbotron} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";

function Account () {
    const { currentUser, logout } = useAuth();

    const handleClick = (event) => {
        const {name} = event.target;
        console.log(name)
        if (name === 'profile'){
            return (
                console.log(name)
            )
        } else if (name === 'services'){
            return (
                console.log(name)
            )
        } else if (name === 'experience') {
            return (
                console.log(name)
            )
        }
        
    }

    return(
        <Container fluid>
            <Row>
                <Col>
                    <h1 style={{textAlign: 'center'}}>Hi {currentUser.email}!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Settings</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <button name='profile' onClick={handleClick}>Profile</button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <button name='services' onClick={handleClick}>Services</button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <button name='experience' onClick={handleClick}>Experience</button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={9}>
                    <Jumbotron style={{width: '100%', background: "transparent"}}>
                    <h1 class="display-4">Profile</h1>
                    <hr class="my-4" />
                    <h2 class="lead">Name:</h2>
                    <p>users name</p>
                    <h2 class="lead">Email:</h2>
                    <p>users email</p>
                    <h2 class="lead">Phone number:</h2>
                    <p>users number</p>
                    <h2 class="lead">Location:</h2>
                    <p>users location</p>
                    <h2 class="lead">Website:</h2>
                    <p>users website</p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Account