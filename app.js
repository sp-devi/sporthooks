const axios = require('axios');

// Requires OAuth access key
axios.get('https://api.meetup.com/find/upcoming_events')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });