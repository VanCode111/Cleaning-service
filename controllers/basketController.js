const {
  Basket,
  Service,
  Order,
  serviceItems,
  roomItems,
  Rooms,
} = require("../models/models");
const ApiError = require("../error/ApiError");

class basketController {
  async getBasket(req, res) {
    const { userId } = req.body;
    const basket = await Basket.findOne({
      where: { userId: userId },
      include: {
        model: Order,
        include: [
          {
            model: serviceItems,
            include: { model: Service },
          },
          {
            model: roomItems,
            include: { model: Rooms },
          },
        ],
      },
    });

    if (!basket) {
      return res.json({ message: "Такой корзины нет" });
    }
    return res.json(basket);
  }
  async createBasket(req, res) {
    const service = await Basket.create();
    return res.json(service);
  }
  async deleteFromBasket(req, res) {
    const { userId, orderId } = req.body;
    const cart = await Basket.findOne({ where: { userId: userId } });
    const order = await Order.findOne({
      where: { basketId: cart.id, id: orderId },
    });
    const serviceIte = await serviceItems.destroy({
      where: { orderId: order.id },
    });
    const rooms = await roomItems.destroy({
      where: { orderId: order.id },
    });
    const orders = await order.destroy();
    const ordersget = await Order.findAll();
    return res.json(ordersget);
  }
  async addToBasket(req, res) {
    const { userId, services, rooms, resultPrice } = req.body;
    const cart = await Basket.findOne({ where: { userId: userId } });
    const order = await Order.create({
      basketId: cart.id,
      resultPrice: resultPrice,
    });

    Object.entries(services).forEach(async ([id, quantity]) => {
      const serviceItem = await serviceItems.create({
        orderId: order.id,
        serviceId: id,
        quantity: quantity,
      });
    });
    Object.entries(rooms).forEach(async ([id, quantity]) => {
      const roomItem = await roomItems.create({
        orderId: order.id,
        roomId: id,
        quantity: quantity,
      });
    });
    return res.json(order);
  }
}

module.exports = new basketController();
