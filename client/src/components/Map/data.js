import {useEffect, useState } from 'react';
import API from "../../utils/API";
//bringing in data
function Data() {
    
     // Setting our component's initial state
  const [service] = useState([])
  

  // Load all books and store them with setBooks
  useEffect(() => {
    loadServices()
  }, [])

  // Loads all books and sets them to books
  function loadServices() {
    API.getServices()
      .then(res => 
        console.log(res.data)
      )
      .catch(err => console.log(err));
      
  };
 
  return(service)
      
 
    
 
   };
   export default Data;


  