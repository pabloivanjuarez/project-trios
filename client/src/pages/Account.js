import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Card, ListGroup, Jumbotron} from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";

function Account () {
    const [selectedSection, setSelectedSection] = useState();
    const [userInput, setuserInput] = useState();
    const { currentUser, logout } = useAuth();

    const handleClick = (event) => {
        const {name} = event.target;
        console.log(name)
         if (name === 'profile'){
            setSelectedSection(
                <>
                    <h1 className="display-4">Profile</h1>
                    <hr className="my-4" />
                    <h2 className="lead">Name:</h2>
                    <p>users name</p>
                    <h2 className="lead">Email:</h2>
                    <p>users email</p>
                    <h2 className="lead">Phone number:</h2>
                    <p>users number</p>
                    <h2 className="lead">Location:</h2>
                    <p>users location</p>
                    <h2 className="lead">Website:</h2>
                    <p>users website</p>
                </>
            )
        } else if (name === 'services'){
            setSelectedSection(
                <>
                    <h1 className="display-4">Services</h1>
                    <hr className="my-4" />
                    <h2 className="lead">Service Offered:</h2>
                    <p>users service</p>
                    <h2 className="lead">section:</h2>
                    <p>users response</p>
                    <h2 className="lead">section:</h2>
                    <p>users response</p>
                    <h2 className="lead">section:</h2>
                    <p>users response</p>
                    <h2 className="lead">section:</h2>
                    <p>users response</p>
                </>
            )
        } else if (name === 'experience') {
            setSelectedSection(
                <>
                    <h1 className="display-4">Experience</h1>
                    <hr className="my-4" />
                    <h2 className="lead">Experience:</h2>
                    <p>users experience</p>
                    <h2 className="lead">section:</h2>
                    <p>users response</p>
                    <h2 className="lead">section:</h2>
                    <p>users response</p>
                    <h2 className="lead">section:</h2>
                    <p>users response</p>
                    <h2 className="lead">section:</h2>
                    <p>users response</p>
                </>
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
                        {selectedSection}
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Account