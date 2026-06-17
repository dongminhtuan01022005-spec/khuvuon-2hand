const { poolPromise } = require('../db');

const getAllCustomers = async () => {

    try {

        const pool = await poolPromise;

        if (!pool) {
            throw new Error('Database chưa được kết nối!');
        }

        const result = await pool.request()
            .query("SELECT * FROM Customers");

        return result.recordset;

    } catch (err) {

        console.error('Lỗi khi lấy khách hàng:', err);
        return [];

    }
};

const addCustomer = async (customer) => {

    try {

        console.log("ADD CUSTOMER FUNCTION CALLED");
        console.log(customer);

        const pool = await poolPromise;

        await pool.request()
            .input('FullName', customer.FullName)
            .input('Email', customer.Email)
            .input('PhoneNumber', customer.PhoneNumber)
            .input('Address', customer.Address)
            .query(`
                INSERT INTO Customers
                (FullName, Email, PhoneNumber, Address)
                VALUES
                (@FullName, @Email, @PhoneNumber, @Address)
            `);

        console.log("INSERT SUCCESS");

        return true;

    } catch (err) {

        console.error('Lỗi thêm khách hàng:', err);
        throw err;

    }
};

module.exports = {
    getAllCustomers,
    addCustomer
};