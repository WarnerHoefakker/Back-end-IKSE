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

var sequelize = new Sequelize('mysql://doadmin:o5rurt8iv516uekc@db-mysql-ams3-58397-do-user-8319964-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED', {
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
