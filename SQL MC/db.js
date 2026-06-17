const sql = require('mssql');

const config = {
    server: 'LUCIUSTUAN\\SQLEXPRESS', 
    database: 'KhuVuon2Hand',
    options: {
        encrypt: false, 
        trustServerCertificate: true
    },
    authentication: {
        type: 'ntlm',
        options: {
            userName: 'ADMIN', // Tên user Windows của bạn
            domain: '' 
        }
    }
};

async function testConnection() {
    try {
        let pool = await sql.connect(config);
        console.log("Kết nối database thành công rồi Lucius ơi!");
        return pool;
    } catch (err) {
        console.log("Lỗi kết nối rồi: ", err);
    }
}

module.exports = { testConnection };