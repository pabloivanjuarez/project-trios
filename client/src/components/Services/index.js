import React from 'react'
import { Nav } from 'react-bootstrap'


function Services() {
  return (

    <div className="container-fluid align-center">

      <div className="product-row row align-center">

        <div className="col my-auto">
        <Nav.Link href="/services#phone"><img className="service" src="./Assets/images/mobile_icon.png" alt="cellphone" /></Nav.Link>
          <div className="middle">
            <div className="text">Mobile</div>
          </div>
        </div>

        <div className="col my-auto">
        <Nav.Link href="/services#tablet"><img className="service" src="./Assets/images/tablet_icon.png" alt="tablet"/></Nav.Link>
          <div className="middle">
            <div className="text">Tablet</div>
          </div>
        </div>

        <div className="col my-auto">
        <Nav.Link href="/services#zoom"><img className="service" src="./Assets/images/zoom_icon.png" alt="web conference"/></Nav.Link>
          <div className="middle">
            <div className="text">Zoom/Skype</div>
          </div>
        </div>

        <div className="col my-auto">
        <Nav.Link href="/services#wifi"><img className="service" src="./Assets/images/wifi_icon.png" alt="wifi"/></Nav.Link>
          <div className="middle">
            <div className="text">Wifi</div>
          </div>
        </div>

        <div className="col my-auto">
        <Nav.Link href="/services#internet"><img className="service" src="./Assets/images/internet_icon.png" alt="internet"/></Nav.Link>
          <div className="middle">
            <div className="text">Internet</div>
          </div>
        </div>

        <div className="col my-auto">
        <Nav.Link href="/services#computer"><img className="service" src="./Assets/images/computer_icon.png" alt="computer"/></Nav.Link>
          <div className="middle">
            <div className="text">Computer</div>
          </div>
        </div>

        <div className="col my-auto">
        <Nav.Link href="/services#printer"><img className="service" src="./Assets/images/printer_icon.png" alt="printer"/></Nav.Link>
          <div className="middle">
            <div className="text">Printer</div>
          </div>
        </div>

        <div className="col my-auto">
        <Nav.Link href="/services#other"><img className="service" src="./Assets/images/other_icon.png" alt="camera"/></Nav.Link>
          <div className="middle">
            <div className="text">Other</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
