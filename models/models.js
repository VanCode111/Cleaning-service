const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
});

const Service = sequelize.define("service", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER },
  img: { type: DataTypes.STRING, unique: true },
});

const Rooms = sequelize.define("rooms", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER },
});

const Order = sequelize.define("order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  resultPrice: { type: DataTypes.INTEGER },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const serviceItems = sequelize.define("service-items", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER },
});

const roomItems = sequelize.define("room-items", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  quantity: { type: DataTypes.INTEGER },
});

serviceItems.belongsTo(Service);
Service.hasOne(serviceItems);

roomItems.belongsTo(Rooms);
Rooms.hasOne(roomItems);

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(Order);
Order.belongsTo(Basket);

Order.hasMany(serviceItems);
serviceItems.belongsTo(Order);

Order.hasMany(roomItems);
roomItems.belongsTo(Order);

module.exports = {
  User,
  Service,
  Order,
  Basket,
  Rooms,
  serviceItems,
  Rooms,
  roomItems,
};
