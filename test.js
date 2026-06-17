const sql = require('mssql/msnodesqlv8');

const config = {
    driver: 'msnodesqlv8',
    connectionString: "Driver={SQL Server};Server=.\\SQLEXPRESS;Database=KhuVuon2Hand;Trusted_Connection=yes;TrustServerCertificate=yes;"
};

async function test() {
    try {
        console.log("Đang thử kết nối qua ODBC Native...");
        const pool = await sql.connect(config);
        console.log("KẾT NỐI THÀNH CÔNG RỒI LUCIUS ƠI!");
        await pool.close();
    } catch (err) {
        console.error("LỖI CUỐI CÙNG:", err.message);
    }
}
test();