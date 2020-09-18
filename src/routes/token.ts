const axios = require('axios');
const qs = require('querystring')
import express from 'express';
let app = express();

// ============================
// Retornar el token
// ============================
app.get('/token', (req, res) => {

    let requestBody = {
        grant_type: 'client_credentials',
        client_id: '43aca6f8021e46bc807e2df0dee9efed',
        client_secret: 'c92688eff83b42ac92d58678e80191f1'
    };

    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

    const url = 'https://accounts.spotify.com/api/token/';

    axios.post( url, qs.stringify(requestBody), config)
      .then((response: any) => {
        console.log(response.data);
        res.json({
            ok: true,
            token: response.data
        })
      })
      .catch((error: any) => {
        console.log(error);
        res.json({
            ok: false,
            token: 'Error al generar el token'
        })
      });
    
 });

 module.exports = app;