module.exports = function (sequelize, DataTypes) {
  const Meally = sequelize.define("Meally", {
    // The email cannot be null, and must be a proper email before creation
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    customer_address: {
      type: DataTypes.STRING,
      allowNull: false
    },

    customer_order: {
      type: DataTypes.STRING,
      allowNull: false
    },

    customer_total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    onTheway: {
      type: DataTypes.BOOLEAN(1),
      allowNull: false,
      defaultValue: '0'
      
    },
  });



  return Meally;
};

