const express = require("express")
const userRouter = require("./user.route")
const cartRouter = require("./cart.route")
const productRouter = require("./product.route")
const categoryRouter = require("./category.route")
const subcategoryRouter = require("./sub.category.route")
const subchildcategoryRouter = require("./sub.child.category.route")
const router = express.Router()

router.use("/user",userRouter)
router.use("/product",productRouter)
router.use("/cart",cartRouter)
router.use("/category",categoryRouter)
router.use("/sub-category",subcategoryRouter)
router.use("/sub-child-category",subchildcategoryRouter)

module.exports = router