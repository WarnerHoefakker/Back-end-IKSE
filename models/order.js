module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      fname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      adr: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.STRING
      }
    });
  
    return Order;
  };