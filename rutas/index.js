const express = require('express');

const rutaMolde = require('./molde.ruta');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/start',rutaMolde);
}
module.exports = routerApi;