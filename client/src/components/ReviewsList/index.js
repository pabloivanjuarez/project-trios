import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Nav, Table } from 'react-bootstrap'
import API from "../../utils/API";


function ReviewsList(props) {
  // 
  const [services, setServices] = useState({})



  const { id } = useParams()
  useEffect(() => {
    API.getServices(id)
      .then(res => setServices(res.data))
      .catch(err => console.log(err));
  }, [])

  return (

    <div className="container-fluid">
      <div className="row">

        <div className="col-md-4">
          <div className="card-body">
          <h5 className="card-title">Very Helpful</h5>
              <h6 className="card-subtitle mb-2 text-muted">Carl from Vernonia</h6>
          I was having a hard time finding my internet icon and getting connected to my Wifi, but Cathy was able to help me out.  I'm pretty sure it's working now.
          </div>
      </div>
        <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title">Need more help</h5>
              <h6 className="card-subtitle mb-2 text-muted">Jim from Hillsboro</h6>
          Omar came over and we were able to get the printer working, and he was very polite and professional.  The next day, I think it updated the drivers or something, because now it's not working.  
          </div>
      </div>
        <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title">So Glad To Get the Help I needed</h5>
              <h6 className="card-subtitle mb-2 text-muted">Nancy from N. Portland</h6>
          I was having trouble with getting Zoom to work on my computer, and I called Ramon and he came over right away.  Not only were we able to get Zoom to work on my computer, but we got it to work on my phone, too!  Thank you SO MUCH for your help!  I was able to watch my grandson in Tulsa open his birthday presents!  So wonderful!
          </div>
      </div>

      </div>


      <div className="row">

<div className="col-md-4">
  <div className="card-body">
  <h5 className="card-title">Very Professional</h5>
      <h6 className="card-subtitle mb-2 text-muted">Anita from Estacada</h6>
I was having problems with getting my internet to work, and after a couple of weeks working with Comcast with no success, I called Yvonne and we were able to get reconnected and set up a firewall to help protect me from hackers.  Thanks, Yvonne!
  </div>
</div>
<div className="col-md-4">
<div className="card-body">
  <h5 className="card-title">Got my phone back</h5>
      <h6 className="card-subtitle mb-2 text-muted">Chaz from Newberg</h6>
 Ellen helped me get my apps on my phone fixed and now it's working just fine.
  </div>
</div>
<div className="col-md-4">
<div className="card-body">
  <h5 className="card-title">Zoom Troubles No More!</h5>
      <h6 className="card-subtitle mb-2 text-muted">Ben from Wilsonville</h6>
  I had no luck getting support from the Wilsonville School District, they didn't know what was wrong and my kids already missed a whole day of school! I reached out to Keith and was able to get all of my kids back online and caught up in their school lessons.  Keith was very friendly and professional.  10/10 I would use Nerds Next Door again!
  </div>
</div>

</div>

<div className="row">

        <div className="col-md-4">
          <div className="card-body">
          <h5 className="card-title">Upgraded and Smokin' Fast</h5>
              <h6 className="card-subtitle mb-2 text-muted">Brett from Woodstock</h6>
          I was unsure about upgrading my PC so I used your services and found Estelle.  Her certification gave me the peace of mind I needed to call her and get the support I needed.  She was able to work with my schedule and arrived on time.  I was able to get my machine upgraded and I couldn't be happier!
          </div>
      </div>
        <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title">Fast and Secure</h5>
              <h6 className="card-subtitle mb-2 text-muted">Jake from Hawthorne</h6>
          I needed to reinstall my network at my coffee shop, and with Nerds Next Door I was able to find Mr. Xavier, who helped get us back online with secure networks for customers and for the business to securely communicate!  Thanks, Nerds Next Door!
          </div>
      </div>
        <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title">Bingo!</h5>
              <h6 className="card-subtitle mb-2 text-muted">Gwen from Vancouver</h6>
          It finally works!  My grandson came over and fixed my printer, but screwed up my tablet.  I reached out to Igor Johnson and now I'm back playing Words with Friends.  Thank you so much!
          </div>
      </div>

      </div>



 

    </div>

  )
}

export default ReviewsList
