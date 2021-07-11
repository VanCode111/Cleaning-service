const { Service } = require("../models/models");
const ApiError = require("../error/ApiError");

class serviceController {
  async getAll(req, res) {
    const services = await Service.findAll();
    return res.json(services);
  }
  async addService(req, res) {
    const { name, price, img } = req.body;
    const service = await Service.create({ name, price, img });
    return res.json(service);
  }
}

module.exports = new serviceController();
