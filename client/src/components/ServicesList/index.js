import React, { useEffect, useState }from 'react'
import { useParams } from "react-router-dom";
import { Nav, Table } from 'react-bootstrap'
import API from "../../utils/API";


function ServicesList(props) {
// 
  const [services, setServices] = useState({})

 

  const {id} = useParams()
  useEffect(() => {
    API.getServices(id)
      .then(res => setServices(res.data))
      .catch(err => console.log(err));
  }, [])

  return (

    <div className="container-fluid">
    <Table className="table">
      <thead>
        {/* cell phone support  */}
        <tr>
          <th  colSpan="4" id="phone">Cell Phone Support</th></tr>
        <tr>

          
          <th scope="col">Albert Banks</th>
          <th scope="col">I Can help with your cell phone issue</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>

        </tr>
        <tr>
          <th scope="col">Chad Davis</th>
          <th scope="col">Cell Phone Expert</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Ellen Franz</th>
          <th scope="col">iOS or Android?  No problem!</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        

         {/* tablet support  */}
         <tr><th colSpan="4" id="tablet">Tablet Support</th></tr>
        <tr>
          
          <th scope="col">Ginger Harris</th>
          <th scope="col">iPad Support Specialist</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Igor Johnson</th>
          <th scope="col">Windows Tablets are my thing</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>

         {/* zoom/skype support  */}
         <tr><th colSpan="4" id="zoom">Zoom/Skype Support</th></tr>
        <tr>
          <th scope="col">Keith Lewis</th>
          <th scope="col">Kids need to get back to e-learning?</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Monique Newton</th>
          <th scope="col">Lost connection just before the important meeting?  Give me a call!</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Oscar Padilla</th>
          <th scope="col">Zoom Support?  Skype Support?  Se habla espa&ntilde;ol</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Quinton Rodriguez</th>
          <th scope="col">I can help with your online conference issues</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Samantha Turner</th>
          <th scope="col">Make sure your zoom call will work before the holidays</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
         {/* Wifi support  */}
         <tr><th colSpan="4" id="wifi">WiFi Support</th></tr>
        <tr>
          <th scope="col">Umar Vaughn</th>
          <th scope="col">Need to change your WiFi user/password?  Call me</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Will Xavier</th>
          <th scope="col">Get your home or business wifi installed right</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Yvonne Zimmerman</th>
          <th scope="col">Network Security and Installation</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>

        {/* Internet support  */}
        <tr><th colSpan="4" id="internet">Internet Support</th></tr>
        <tr>
          <th scope="col">Ann Bradley</th>
          <th scope="col">Internet Browser help</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Cathy Dewine</th>
          <th scope="col">Lose that internet shortcut? Can't find your bookmarks?</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
  
         {/* computer support  */}
         <tr><th colSpan="4" id="computer">Computer Support</th></tr>
        <tr>
          <th scope="col">Estelle Fontaine</th>
          <th scope="col">A+ Certified Desktop Support</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">George Hernandez</th>
          <th scope="col">PC Support, Laptop Support, no problem</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Ivan Jones</th>
          <th scope="col">Computer Support and Installation Support</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Karla Lopez</th>
          <th scope="col">Desktop assistance and instruction</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Mohammad Nahdi</th>
          <th scope="col">Computer Setup and Help!</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
         {/* printer support  */}
         <tr><th colSpan="4" id="printer">Printer Support</th></tr>
        <tr>
          <th scope="col">Omar Pascale</th>
          <th scope="col">PC Load letter?  What does that mean?</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
     
         {/* other support  */}
         <tr><th colSpan="4" id="other">Other Support</th></tr>
        <tr>
          <th scope="col">Quinlee Ranaldo</th>
          <th scope="col">Set up that ipod with your favorite music</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
        <tr>
          <th scope="col">Stacey Thompson</th>
          <th scope="col">Digital Camera Setup and instruction</th>
          {/* <th scope="col"></th> */}
          <th scope="col">more</th>
        </tr>
    
      </thead>
      <tbody>
        
      </tbody>
    </Table>
  </div>

  )
}

export default ServicesList
