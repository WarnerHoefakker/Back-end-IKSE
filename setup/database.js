// const mysql = require('mysql');
const pg = require('pg');
//
// const connection = postgres.createConnection({
//     host: 'app-e41a0fdc-28d3-4f19-a4a1-9f99f415feed-do-user-8319964-0.b.db.ondigitalocean.com',
//     port: '25060',
//     user: 'sitepoint',
//     password: 'yekvmbn5019nsras',
//     database: 'sitepoint'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected!');
// });

module.exports = {
    HOST: "app-e41a0fdc-28d3-4f19-a4a1-9f99f415feed-do-user-8319964-0.b.db.ondigitalocean.com",
    PORT: "25060",
    USER: "sitepoint",
    PASSWORD: "yekvmbn5019nsras",
    DB: "sitepoint",
    dialect: "postgres",
    sslmode: "require",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
