const express = require('express');
const router = express.Router();

const plantModel = require('../models/plant');

// GET ALL
router.get('/', async (req, res) => {
  console.log('API PLANTS CALLED');

    try {

        const plants = await plantModel.getAllPlants();

        res.json({
            success: true,
            count: plants.length,
            data: plants
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

// GET BY ID
router.get('/:id', async (req, res) => {
    console.log('API PLANT BY ID CALLED');

    try {

        const plant = await plantModel.getPlantById(req.params.id);

        if (!plant) {
            return res.status(404).json({
                success: false,
                message: 'Plant not found'
            });
        }

        res.json({
            success: true,
            data: plant
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

// POST
router.post('/', async (req, res) => {
    console.log('API PLANT POST CALLED');
    try {

        await plantModel.addPlant(req.body);

        res.json({
            success: true,
            message: 'Plant created successfully'
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

// PUT
router.put('/:id', async (req, res) => {
    console.log('API PLANT PUT CALLED');
    try {

        await plantModel.updatePlant(
            req.params.id,
            req.body
        );

        res.json({
            success: true,
            message: 'Plant updated successfully'
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

// DELETE
router.delete('/:id', async (req, res) => {

    try {

        await plantModel.deletePlant(req.params.id);

        res.json({
            success: true,
            message: 'Plant deleted successfully'
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});

module.exports = router;