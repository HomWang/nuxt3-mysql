import mysql2 from 'mysql2/promise';

const connectionMysql: any = mysql2.createPool({
    host: process.env.NUXT_SERVER_MYSQL_HOST,
    user: process.env.NUXT_SERVER_MYSQL_USER,
    password: process.env.NUXT_SERVER_MYSQL_PASSWORD,
    database: process.env.NUXT_SERVER_MYSQL_DATABASE,
    // waitForConnections: true, // 是否等待连接
    // connectionLimit: 10, // 最大连接数
    // queueLimit: 0
});

export default connectionMysql;