module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.DOUBLE
    },
    image: {
      type: Sequelize.BLOB('long')
    }
  });

  return Product;
};