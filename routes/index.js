const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const serviceRouter = require("./serviceRouter");
const basket = require("./basket");
const roomRouter = require("./roomRouter");

router.use("/user", userRouter);
router.use("/service", serviceRouter);
router.use("/basket", basket);
router.use("/room", roomRouter);

module.exports = router;
