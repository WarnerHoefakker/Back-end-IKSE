const dbConfig = require('../setup/database');
const fs = require('fs');

const Sequelize = require("sequelize");
// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   sslmode: require,
//   dialectOptions: {
//     ssl: {
//       // ca: fs.readFileSync(__dirname + 'ca-certificate.crt'),
//       rejectUnauthorized: false
//     }
//   },
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });

var sequelize = new Sequelize('postgres://kxpytulwtkgiir:0a1ad5feba7b96c202adeecf142065153d0ae887f02dffb872c5664b9d1fb832@ec2-99-80-170-190.eu-west-1.compute.amazonaws.com:5432/d4c16pt8d5hc55', {
})

sequelize.authenticate().then(() => {
    console.log('Connection to database has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to database:', err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("../models/product")(sequelize, Sequelize);
db.user = require("../models/user.js")(sequelize, Sequelize);
db.role = require("../models/role.js")(sequelize, Sequelize);
db.order = require("../models/order.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
