
const db = require("../models/index");
const Order = db.order;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    if (!req.body.fname) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    const orders = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      adr: req.body.adr,
      city: req.body.city,
      zip: req.body.zip,
      published: req.body.published ? req.body.published : false
    };
  
    Order.create(orders)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the order."
        });
      });
  };


exports.findAll = (req, res) => {
    const title = req.query.email;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Order.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orders."
        });
      });
  };

exports.deleteAll = (req, res) => {
    Order.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Orders were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Orders."
        });
      });
  };