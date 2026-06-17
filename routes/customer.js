const express = require('express');
const router = express.Router();

const customerModel = require('../models/customer');

router.get('/', async (req, res) => {

    try {

        const customers =
            await customerModel.getAllCustomers();

        res.status(200).json({
            success: true,
            count: customers.length,
            data: customers
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: 'Có lỗi khi lấy khách hàng',
            error: err.message
        });

    }

});
router.post('/', async (req, res) => {

    try {

        await customerModel.addCustomer(req.body);

        res.json({
            success: true,
            message: 'Customer added successfully'
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

});
module.exports = router;