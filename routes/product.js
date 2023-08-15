const router = require('express').Router();
const productController = require('../controllers/productController');

router.post("/add-product",productController.product_create);
router.get("/products", productController.product_all);
router.put("/product/:productId",productController.update_product);
router.get("/product/:productId", productController.product_details);
router.delete("/product/:productId",productController.delete_product);


module.exports = router;