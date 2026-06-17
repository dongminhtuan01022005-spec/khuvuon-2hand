const { poolPromise } = require('../db');

const getAllProducts = async () => {
    try {
        const pool = await poolPromise;

        if (!pool) {
            throw new Error('Database chưa được kết nối!');
        }

        const result = await pool.request()
            .query("SELECT * FROM Products");

        return result.recordset;

    } catch (err) {

        console.error('Lỗi khi lấy dữ liệu:', err);
        return [];

    }
};

module.exports = {
    getAllProducts
};