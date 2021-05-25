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

router.get('/crear', (req,res) => {
    res.render('create')
})

router.post('/', async(req,res) => {
    const body = req.body
    try {
        await mascota.create(body);
        res.redirect('/mascotas')
    } catch (error) {
        console.log(error)
    }
  
})

router.get('/:id', async(req,res) => {
    const id = req.params.id;
    try {
        const mascotaById = await mascota.findOne({_id: id});

        res.render('detalle', {
            mascota: mascotaById,
            error: false
        })

        console.log(mascotaById)

    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

router.delete('/:id', async(req,res) => {
    const id = req.params.id;
    try {
        const mascotaById = await mascota.findByIdAndDelete({_id: id});
        if(mascotaById){
            res.json({
                estado: true, 
                mensaje: 'eliminado!'
            })
        }else{
            res.json({
                estado: false, 
                mensaje: 'falló la eliminación!'
            })
        }

    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})

module.exports = router;