import axios from 'axios';

export default {
    //Get all services
    getServices: () => {
        axios.get('/api/services');
    },
    //Get one service
    getService: (id) => {
        axios.get(`/api/services/${id}`);
    },
    //Create Service
    createService: () => {
        axios.post('/api/services');
    },
    //Update Service
    updateService: (id) => {
        axios.put(`/api/services/${id}`)
    },
    //Delete Service
    deleteService: (id) => {
        axios.delete(`/api/services/${id}`)
    }
}