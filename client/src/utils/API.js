import axios from 'axios';

export default {

    // Save new user [1/1/21 CS]
    createUser: (data) => axios.post('/api/users', data),

    // Get user email on log in [1/1/21 CS]
    getUser: (email) => axios.get(`/api/users/${email}`),

    //Create Service
    createService: (data) => axios.post('/api/services', data),

    //Get one service
    getService: (id) => axios.get(`/api/services/${id}`),

    //Get all services
    getServices: () => axios.get('/api/services'),

    //Update Service
    updateService: (id) => axios.put(`/api/services/${id}`),

    //Delete Service
    deleteService: (id) => axios.delete(`/api/services/${id}`)
    
};
