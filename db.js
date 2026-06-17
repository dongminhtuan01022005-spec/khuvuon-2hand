const sql = require('mssql');

const config = {
    user: 'sa',
    password: 'KhuVuon@2026',
    server: 'localhost',
    database: 'KhuVuon2Hand',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        instanceName: 'SQLEXPRESS'
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Kết nối Database thành công!');
        return pool;
    });

module.exports = { sql, poolPromise };