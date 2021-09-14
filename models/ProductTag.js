const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_id: {  //Connecting to Product Model's ID
      type: DataTypes.INTEGER, 
      references: {
        model: "product",
        key:"id", 
     }
   },
   category_id: {  //Connecting to Tag Model's ID
    type: DataTypes.INTEGER, 
    references: {
      model: "tag",
      key:"id", 
   }
 },  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
