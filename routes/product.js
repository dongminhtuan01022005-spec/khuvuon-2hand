const express = require('express');
const router = express.Router();

const productModel = require('../models/product');

router.get('/', async (req, res) => {
    try {

        const products =
            await productModel.getAllProducts();

        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: "Có lỗi xảy ra khi lấy danh sách sản phẩm",
            error: err.message
        });

    }
});

module.exports = router;