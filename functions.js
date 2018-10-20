const axios = require('axios');

const functions = {};

functions.loadPerson = function(id) {
  return axios.get(`https://swapi.co/api/people/${id}`)
    .then(response => response.data);
};

module.exports = functions;
