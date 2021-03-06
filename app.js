const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const https = require('https');

var corsOptions = {
    origin: "*"
  };

const db = require("./models");
const Role = db.role;
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     consolxe.log("Drop and re-sync db.");
//     initial();
// });

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });

    Role.create({
      id: 2,
      name: "moderator"
    });

    Role.create({
      id: 3,
      name: "admin"
    });
  }

const app = express();

app.use(cors(corsOptions));

const productRoutes = require("./routes/product.routes");
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const orderRoutes = require('./routes/order.routes');

const connection = require('./setup/database');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
app.use(authRoutes);
app.use(userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// app.use((req, res, next) => {
//     res.status(404).json("404 page");
// });


app.listen(4000);
// https.createServer(app).listen(443);
// https.createServer({
//   key: fs.readFileSync('./key.pem'),
//   cert: fs.readFileSync('./cert.pem'),
//   passphrase: 'YOUR PASSPHRASE HERE'
// }, app)
// .listen(8080);
