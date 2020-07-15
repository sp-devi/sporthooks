const axios = require('axios');

axios.get('https://api.meetup.com/find/groups?zip=10021')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    });