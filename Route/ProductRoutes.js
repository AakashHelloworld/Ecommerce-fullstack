const express = require('express');
const productController = require("../RouteController/productController");
const authController = require("../RouteController/authController")
const router = express.Router();
router.route('/').get( authController.protect, productController.getAllProducts);

router.route('/:id').get(authController.restrictTo('admin'), productController.getProduct).patch(productController.updateProducts).delete(authController.protect, productController.deleteProducts)

module.exports = router; 