const router = require("express").Router();
const apiRoutes = require("./api");
const categoryRoutes = require("./api/category-routes");
const tagRoutes = require("./api/tag-routes");
const productRoutes = require("./api/product-routes");

router.use("/api", apiRoutes);
//router.use('/category', categoryRoutes);
//router.use('/tag', tagRoutes);
//router.use('/product', productRoutes)

module.exports = router;
