const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'db-mysql-ams3-58397-do-user-8319964-0.b.db.ondigitalocean.com',
    port: '25060',
    user: 'doadmin',
    password: 'adewxg1k5ei5hrl7',
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
    PASSWORD: "adewxg1k5ei5hrl7",
    DB: "defaultdb",
    dialect: "mysql",
    sslmode: "require",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
