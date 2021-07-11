const Router = require("express");
const router = new Router();
const roomsController = require("../controllers/roomsController");

router.get("/getall", roomsController.getAll);
router.post("/addroom", roomsController.addService);

module.exports = router;
