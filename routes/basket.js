const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");

router.post("/getbasket", basketController.getBasket);
router.post("/create", basketController.createBasket);
router.post("/addtocart", basketController.addToBasket);
router.post("/deletefrombasket", basketController.deleteFromBasket);

module.exports = router;
