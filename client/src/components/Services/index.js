import React from 'react'
import { Nav } from 'react-bootstrap'


function Services() {
  return (

    <div className="container-fluid align-center">

      <div className="product-row row align-center">

        <div className="col">
        <Nav.Link href="/services#phone"><img className="service" src="./Assets/images/cell_phone.svg" alt="cellphone" /></Nav.Link>
          <div className="middle">
            <div className="text">Mobile</div>
          </div>
        </div>

        <div className="col">
        <Nav.Link href="/services#tablet"><img className="service" src="./Assets/images/tablet-1.png" alt="tablet"/></Nav.Link>
          <div className="middle">
            <div className="text">Tablet</div>
          </div>
        </div>

        <div className="col">
        <Nav.Link href="/services#zoom"><img className="service" src="./Assets/images/webconference.png" alt="web conference"/></Nav.Link>
          <div className="middle">
            <div className="text">Zoom/Skype</div>
          </div>
        </div>

        <div className="col">
        <Nav.Link href="/services#wifi"><img className="service" src="./Assets/images/wifi.png" alt="wifi"/></Nav.Link>
          <div className="middle">
            <div className="text">Wifi</div>
          </div>
        </div>

        <div className="col">
        <Nav.Link href="/services#internet"><img className="service" src="./Assets/images/internet.jpg" alt="internet"/></Nav.Link>
          <div className="middle">
            <div className="text">Internet</div>
          </div>
        </div>

        <div className="col">
        <Nav.Link href="/services#computer"><img className="service" src="./Assets/images/computer.png" alt="computer"/></Nav.Link>
          <div className="middle">
            <div className="text">Computer</div>
          </div>
        </div>

        <div className="col">
        <Nav.Link href="/services#printer"><img className="service" src="./Assets/images/Devices-printer-icon.png" alt="printer"/></Nav.Link>
          <div className="middle">
            <div className="text">Printer</div>
          </div>
        </div>

        <div className="col">
        <Nav.Link href="/services#other"><img className="service" src="./Assets/images/digitalcamera.png" alt="camera"/></Nav.Link>
          <div className="middle">
            <div className="text">Other</div>
          </div>
        </div>
        <div className="col">

        </div>

      </div>

    </div>
  )
}

export default Services
