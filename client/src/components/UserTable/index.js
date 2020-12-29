import React from 'react'
import { Table } from "react-bootstrap";


function UserTable(props) {
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
          {
            props 
            ?
            props.data.map(user => (
              <tr key={user._id}>
                <th scope="row">
                  {/********************************************************** 
                  *For when we have images imported from the user
                  ************************************************************
                  <img className="tablePhoto" src={user.userImg} alt="user"/> 
                  ************************************************************/}
                  <img className="tablePhoto" src='./Assets/images/7.jpg' alt='user'></img>
                </th>
                <td>{user.name}</td>
                <td>{user.service}</td>
                <td>
                  <img className="badgeImg" src="./Assets/images/cert_badge.png" alt="user"/>
                </td>
              </tr>
            ))
            :
            <h1>Loading...</h1>
          }
        </tbody>
      </Table>
    </div>
  )
}

export default UserTable
