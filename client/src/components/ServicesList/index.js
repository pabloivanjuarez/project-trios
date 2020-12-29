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
        <tr><th id="phone">Cell Phone Support</th></tr>
        <tr>
          <th scope="col">{services.name} or {services.phone}</th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>

         {/* tablet support  */}
         <tr><th id="tablet">Tablet Support</th></tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
         {/* zoom/skype support  */}
         <tr><th id="zoom">Zoom/Skype Support</th></tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
         {/* Wifi support  */}
         <tr><th id="wifi">WiFi Support</th></tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        {/* Internet support  */}
        <tr><th id="internet">Internet Support</th></tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
         {/* computer support  */}
         <tr><th id="computer">Computer Support</th></tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
         {/* printer support  */}
         <tr id="printer"><th>Printer Support</th></tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
         {/* other support  */}
         <tr><th id="other">Other Support</th></tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Bio</th>
          <th scope="col">Certified</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </Table>
  </div>

  )
}

export default ServicesList
