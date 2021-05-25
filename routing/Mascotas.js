const express = require('express');
const router =  express.Router();

const mascota = require('../models/Mascota')

router.get('/', async(req, res) => {
    try {
        const listMascotas = await mascota.find();
        res.render("mascotas", {
            arrayMascotas: listMascotas
        })
    } catch (error) {
        console.log(error);
        
    }
})

module.exports = router;