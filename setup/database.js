// const mysql = require('mysql');
//
// const connection = mysql.createConnection({
//     host: 'db-mysql-ams3-58397-do-user-8319964-0.b.db.ondigitalocean.com',
//     port: '25060',
//     user: 'doadmin',
//     password: 'o5rurt8iv516uekc',
//     database: 'defaultdb'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected!');
// });

module.exports = {
    HOST: "db-mysql-ams3-58397-do-user-8319964-0.b.db.ondigitalocean.com",
    PORT: "25060",
    USER: "doadmin",
    PASSWORD: "o5rurt8iv516uekc",
    DB: "defaultdb",
    dialect: "mysql",
    pool: {
      max: 500,
      min: 0,
      acquire: 30000,
      idle: 1
    }
  };
