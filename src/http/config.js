let axios = require('axios');

const axiosConnection = axios.create({
    baseURL: 'http://localhost:8080/api',
});

module.exports = axiosConnection;