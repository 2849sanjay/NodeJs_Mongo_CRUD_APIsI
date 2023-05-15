const router = require("express").Router();
const productController = require("../controllers/product.controller");


router.post('/')
router.get('/', productController.getAllProducts);
router.get('/:productId')
//router.fetch('/:productId')
router.delete('/:productId')

module.exports = router;