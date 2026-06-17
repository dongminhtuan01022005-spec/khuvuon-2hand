const { poolPromise } = require('../db');

const getAllPlants = async () => {
    try {

        const pool = await poolPromise;

        const result = await pool.request()
    .query(`
        SELECT
    PlantID,
    SellerID,
    CategoryID,
    LocationID,
    PlantName,
    Description,
    Price,
    Condition,
    Status,
    CreatedAt,
    UpdatedAt,
    ImageUrl,
    ImageUrl2
FROM Plants
        ORDER BY PlantID DESC
    `);

console.log("FIRST RECORD:");
console.log(result.recordset[0]);

return result.recordset;

    } catch (err) {

        console.error('Lỗi lấy danh sách Plants:', err);
        throw err;

    }
};

const getPlantById = async (id) => {

    try {

        const pool = await poolPromise;

        const result = await pool.request()
            .input('PlantID', id)
            .query(`
                SELECT *
                FROM Plants
                WHERE PlantID = @PlantID
            `);

        return result.recordset[0];

    } catch (err) {

        console.error('Lỗi lấy Plant:', err);
        throw err;

    }
};

module.exports = {
    getAllPlants,
    getPlantById
};