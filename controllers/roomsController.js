const { Rooms } = require("../models/models");
const ApiError = require("../error/ApiError");

class serviceController {
  async getAll(req, res) {
    const services = await Rooms.findAll();
    return res.json(services);
  }
  async addService(req, res) {
    const { name, price } = req.body;
    const service = await Rooms.create({ name, price });
    return res.json(service);
  }
}

module.exports = new serviceController();
