const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db-mysql-ams3-58397-do-user-8319964-0.b.db.ondigitalocean.com',
    port: '25060',
    user: 'doadmin',
    password: 'o5rurt8iv516uekc',
    database: 'defaultdb'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = {
    HOST: "db-mysql-ams3-58397-do-user-8319964-0.b.db.ondigitalocean.com",
    PORT: "25060",
    USER: "doadmin",
    PASSWORD: "o5rurt8iv516uekc",
    DB: "defaultdb",
    dialect: "mysql",
    retry: {
    match: [
        /ETIMEDOUT/,
        /EHOSTUNREACH/,
        /ECONNRESET/,
        /ECONNREFUSED/,
        /ETIMEDOUT/,
        /ESOCKETTIMEDOUT/,
        /EHOSTUNREACH/,
        /EPIPE/,
        /EAI_AGAIN/,
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/
    ],
    max: 5,
    min: 1

}
    // pool: {
    //   max: 5,
    //   min: 0,
    //   // acquire: 50000,
    //   idle: 50000
    // }
  };
