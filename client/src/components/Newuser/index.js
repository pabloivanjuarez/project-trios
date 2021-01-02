import React, {useState} from 'react'
import { Form, Button } from "react-bootstrap"
import API from '../../utils/API'

function Newuser() {
  const [formInput, setFormInput] = useState({});

  // saves users input to state as they type
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setFormInput({...formInput, [name]: value});
    console.log({[name]: value})

  }

  //pushes data entered by user to mongo upon submitting form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formInput);

    API.createService({
      email: formInput.email,
      service: formInput.service,
      phone: formInput.telephone,
      userTitle: formInput.title,
      bio: formInput.bio,
      twitter: formInput.twitterHandle
    })
  }
    
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

          <Form.Group controlId="formBasicEmail"  onChange={handleInputChange}>
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword"  onChange={handleInputChange}>
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
          </Form.Group>

          <h3>What Kind Of Nerd Are You?</h3>
          <h5>I can help with:</h5>

          <Form.Group name='service' onChange={handleInputChange}>
            <Form.Check  type="checkbox" value='Mobile' label="Mobile" />
            <Form.Check type="checkbox" value='Tablet' label="Tablet" />
            <Form.Check type="checkbox" value='Zoom/Skype' label="Zoom/Skype" />
            <Form.Check type="checkbox" value='WiFi' label="WiFi" />
            <Form.Check type="checkbox" value='Internet' label="Internet" />
            <Form.Check type="checkbox" value='Computer' label="Computer" />
            <Form.Check type="checkbox" value='Printer' label="Printer" />
            
            {/* figure out way to make checkbox give value of textarea */}
            <Form.Check type="checkbox" label="Other, specify:" />
            <Form.Control as="textarea" rows={3} />
            {/* ****************************************************** */}
          </Form.Group>

          <h3>Write a Short Title For Your Profile:</h3>

          <Form.Group controlId="exampleForm.BioTitleTextarea"  
          onChange={handleInputChange}>
            <Form.Control name='title' as="textarea" rows={1} />
          </Form.Group>

          <h3>Tell Us a Little About Yourself:</h3>
          <h5>Please include your experience, certifications, and rate</h5>

          <Form.Group controlId="exampleForm.BioTextarea" 
          onChange={handleInputChange}>

            <Form.Control name='bio' as="textarea" rows={4} />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber" 
          onChange={handleInputChange}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control name='telephone' type="phone" placeholder="Enter Phone Number" />
          </Form.Group>

          <Form.Group controlId="formTwitterHandle" 
          onChange={handleInputChange}>
            <Form.Label>Twitter Handle</Form.Label>
            <Form.Control name='twitterHandle' type="twitter" placeholder="Enter Twitter Handle" />
          </Form.Group>

          <Button variant="primary" onClick={handleFormSubmit}>
            Submit
            </Button>
        </Form>
        </div>
      </div>
    </div>



  )
}

export default Newuser
