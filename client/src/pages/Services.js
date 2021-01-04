import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import UserTable from "../components/UserTable"
import Jumbotron from "../components/Jumbotron"
import Services from "../components/Services"
import ServicesList from '../components/ServicesList';


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.getServices()
    .then(res => {
      setUsers(res.data);
    })
  }, [])

  return (
    <div>
      <Jumbotron />
      <h2>Services</h2>
      <Services />
      <ServicesList />
      <UserTable data={users} />
    </div>
  )
}

export default Users;
