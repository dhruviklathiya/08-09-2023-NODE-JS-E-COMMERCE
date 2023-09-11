const express = require("express")
const productRouter = require("./product.route.js")
const categoryRouter = require("./category.route.js")
const subcategoryRouter = require("./sub.category.route")
const subchildcategoryRouter = require("./sub.child.category.route")
const router = express.Router()

router.use("/product",productRouter)
router.use("/category",categoryRouter)
router.use("/sub-category",subcategoryRouter)
router.use("/sub-child-category",subchildcategoryRouter)

module.exports = router