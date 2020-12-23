import React from 'react'
import { Form, Button } from "react-bootstrap"


function Newuser() {
  return (

    <div className="container-fluid">

      <div className="row col-sm-12 col-md-8 col-lg-12 align-items-center">

        <div className="new-user-title">
          <h1>Sign Up with Nerds Next Door</h1>
        </div>

      </div>

      <div className="row col-sm-12 col-md-12 col-lg-12 align-items-center">
        <div className="new-user-form align-center">
        <Form>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <h3>What Kind Of Nerd Are You?</h3>
          <h5>I can help with:</h5>

          <Form.Group controlId="formMobileCheckbox">
            <Form.Check type="checkbox" label="Mobile" />
          </Form.Group>

          <Form.Group controlId="formTabletCheckbox">
            <Form.Check type="checkbox" label="Tablet" />
          </Form.Group>

          <Form.Group controlId="formVideoConfCheckbox">
            <Form.Check type="checkbox" label="Zoom/Skype" />
          </Form.Group>

          <Form.Group controlId="formWifiCheckbox">
            <Form.Check type="checkbox" label="WiFi" />
          </Form.Group>

          <Form.Group controlId="formInternetCheckbox">
            <Form.Check type="checkbox" label="Internet" />
          </Form.Group>

          <Form.Group controlId="formComputerCheckbox">
            <Form.Check type="checkbox" label="Computer" />
          </Form.Group>

          <Form.Group controlId="formPrinterCheckbox">
            <Form.Check type="checkbox" label="Printer" />
          </Form.Group>

          <Form.Group controlId="formOtherCheckbox">
            <Form.Check type="checkbox" label="Other, specify:" />
          </Form.Group>

          <Form.Group controlId="exampleForm.OtherHelpTextarea">

            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <h3>Write a Short Title For Your Profile:</h3>

          <Form.Group controlId="exampleForm.BioTitleTextarea">

            <Form.Control as="textarea" rows={1} />
          </Form.Group>

          <h3>Tell Us a Little About Yourself:</h3>
          <h5>Please include your experience, certifications, and rate</h5>

          <Form.Group controlId="exampleForm.BioTextarea">

            <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phone" placeholder="Enter Phone Number" />
          </Form.Group>

          <Form.Group controlId="formTwitterHandle">
            <Form.Label>Twitter Handle</Form.Label>
            <Form.Control type="twitter" placeholder="Enter Twitter Handle" />
          </Form.Group>



          <Button variant="primary" type="submit">
            Submit
            </Button>


        </Form>
        </div>
      </div>
    </div>



  )
}

export default Newuser
