const { poolPromise } = require("../db");

const createMessage = async (messageData) => {
    const pool = await poolPromise;

    const result = await pool.request()
        .input("FullName", messageData.FullName)
        .input("Email", messageData.Email)
        .input("Phone", messageData.Phone)
        .input("Subject", messageData.Subject)
        .input("MessageContent", messageData.MessageContent)
        .query(`
            INSERT INTO ContactMessages
            (
                FullName,
                Email,
                Phone,
                Subject,
                MessageContent
            )
            VALUES
            (
                @FullName,
                @Email,
                @Phone,
                @Subject,
                @MessageContent
            )
        `);

    return result;
};

const getAllMessages = async () => {
    const pool = await poolPromise;

    const result = await pool.request()
        .query(`
            SELECT *
            FROM ContactMessages
            ORDER BY CreatedAt DESC
        `);

    return result.recordset;
};

module.exports = {
    createMessage,
    getAllMessages
};