
// DEPENDENCIAS ...................................................................

// --> Express.js Library
const express = require('express');
const router = express.Router();

// --> Node File System Library
const fs = require('fs');

// --> Faker Library
const { faker } = require('@faker-js/faker');

// --> JSON DB - Persiste los Datos en Objeto JavaScript
let data = require('../data/index');



// RUTAS ..........................................................................

// --> Lista de Todos los Cursos + Query Params
router.get('/', (req,res) => {

    const { category, level } = req.query;


    if (category){

        const search = data.courses.filter(course => course["category"] === category);
        res.json(search)

    }

    else if (level){

        const search = data.courses.filter(course => course["level"] === level);
        res.json(search)

    }

    else {
        res.json(data.courses)
    }


})


// --> Lista de Todos los Cursos + Query Params
router.get('/:id', (req,res) => {

    const id = req.params.id;

    const search = data.courses.find(course => course["id"] === id);

    res.json(search)

})



router.post('/', (req,res) => {

    const body = req.body;


    console.log(body)

    const new_course = {

        "id": `${ ++data.courses.length }`,
        "name": body.name,
        "level": body.level,
        "category": body.category

    }



    data.courses.push(new_course);

    data.courses = data.courses.filter(course => course !== null);


    const data_update = JSON.stringify(data);



    fs.writeFileSync('./app/data/db.json', data_update, 'utf-8')


    res.json({
        message: 'Successfully Created Course',
        data: new_course
    })



})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'update',
        data: body,
        id,
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted',
        id,
    });
});





module.exports = router;