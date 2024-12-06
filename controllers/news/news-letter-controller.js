const express = require('express');
const path = require('path');
const axios = require('axios');

const router = express.Router();

const listId = '7f941ae0ba';
const dataCenter = 'us8';
const apiKey = '4d03304910748948e45baafdc373c862-us8';

router.post('/success', (req, res) => {
  res.redirect('/'); 
});

router.post('/failure', (req, res) => {
  res.redirect('/'); 
});

router.post('/sub', (req, res) => {
  const email = req.body.email;

  const config = {
    method: 'post',
    url: `https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}`,
    auth: {
      username: 'anyname',
      password: apiKey,
    },
    data: {
      members: [
        {
          email_address: email,
          status: 'subscribed',
        },
      ],
    },
  };

  axios(config)
    .then((response) => {
      if (response.status === 200 && response.data.error_count === 0) {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'success.html'));
      } else {
        res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'failure.html'));
      }
    })
    .catch((error) => {
      res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'failure.html'));
    });
});


module.exports = router;
