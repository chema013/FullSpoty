"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require('axios');
const qs = require('querystring');
const express_1 = __importDefault(require("express"));
let app = express_1.default();
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
    axios.post(url, qs.stringify(requestBody), config)
        .then((response) => {
        console.log(response.data);
        res.json({
            ok: true,
            token: response.data
        });
    })
        .catch((error) => {
        console.log(error);
        res.json({
            ok: false,
            token: 'Error al generar el token'
        });
    });
});
module.exports = app;
//# sourceMappingURL=token.js.map