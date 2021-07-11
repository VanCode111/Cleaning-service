const Router = require("express");
const router = new Router();
const serviceController = require("../controllers/serviceController");


router.get("/getall", serviceController.getAll);
router.post("/addservice", serviceController.addService);

module.exports = router;
