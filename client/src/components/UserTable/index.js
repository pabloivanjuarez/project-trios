import React from 'react'
import { Table, Col, Row } from "react-bootstrap";


function UserTable() {
  return (
    <div className="container-fluid">
      <Table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Bio</th>
            <th scope="col">Certified</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <img className="tablePhoto" src="./Assets/images/7.jpg" alt="user"/>
            </th>
            <td>James Simpson</td>
            <td>Mobile and Desktop Support for the Greater Portland Area</td>
            <td>
              <img className="badgeImg" src="./Assets/images/cert_badge.png" alt="user"/>
            </td>
          </tr>
            <tr>
              <th scope="row">
                <img className="tablePhoto" src="./Assets/images/30.jpg" alt="user"/>
              </th>
              <td>Eric Jones</td>
              <td>Video Conferencing Expertise!
            </td>
              <td>
                <img className="badgeImg" src="./Assets/images/cert_badge.png" alt="user"/>
              </td>
          </tr>
              <tr>
                <th scope="row">
                  <img className="tablePhoto" src="./Assets/images/43.jpg" alt="user"/>
              </th>
                <td>Carter Townsend</td>
                <td>Computer Savvy PSU Student</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  <img className="tablePhoto" src="./Assets/images/76.jpg" alt="user"/>
                </th>
                <td>Natalie Miller</td>
                <td>Network Security for Your Home or Office</td>
                <td>
                  <img className="badgeImg" src="./Assets/images/cert_badge.png" alt="user"/>
                </td>
          </tr>
                <tr>
                  <th scope="row">
                    <img className="tablePhoto" src="./Assets/images/80.jpg" alt="user"/>
                  </th>
                  <td>Alyssa Burke
            </td>
                  <td>IT/CS Student Looking to Help Out
            </td>
                  <td></td>
                </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default UserTable
