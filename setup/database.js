const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ElshofFey01!',
    database: 'sitepoint'
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "ElshofFey01!",
    DB: "sitepoint",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

