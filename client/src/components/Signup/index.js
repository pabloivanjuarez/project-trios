import React from 'react'
import { Card, Button } from "react-bootstrap"


function Signup() {
  return (

    <div className="container-fluid">


      <Card>
        <Card.Header>Log In/Sign Up</Card.Header>
        <Card.Body>
          <Card.Title>Do You Have Tech Services to Offer?</Card.Title>
          <Card.Text>
            Are you already a Nerds Next Door Member?  Click below!
    </Card.Text>
          <Button id="logIn" variant="primary">Log In</Button>
          <Button id="signUp" variant="secondary">Sign Up</Button>
        </Card.Body>
      </Card>

    </div>
  )
}

export default Signup
