
const express = require('express');


const coursesRouter = require('./courses.router');


function routerApp(app) {

    const router = express.Router()
    app.use('/api/v1', router);

    router.use('/courses', coursesRouter);


}

module.exports = routerApp;