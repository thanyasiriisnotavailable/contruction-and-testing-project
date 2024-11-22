const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
 
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(express.static(__dirname));
 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/html/Homepage.html");
});
 
app.post('/', (req, res) => {
  
    const config = {
        method: "post",
       
    };
 
    axios(config)
        .then(response => {
            if (response.status === 200 && response.data.error_count === 0) {
                console.log(`user :`, req.body.email);
                res.sendFile(__dirname + '/html/login.html');
            } else {
                console.log(`something went wrong`);
                res.sendFile(__dirname + '/html/register.html');
            }
        }
        )
        .catch(error => {
            console.error(error);
          });
});
 
app.post('/failure', (req, res) => {
    res.redirect('/');
});
 
app.listen(3009, () => {
    console.log(`Server is running on port 3002`);
});