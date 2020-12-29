import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import UserTable from "../components/UserTable"
import Jumbotron from "../components/Jumbotron"


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
      <h2>Reviews</h2>
      {/* <UserTable data={users} /> */}
    </div>
  )
}

export default Users;
