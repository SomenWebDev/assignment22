const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");
const subAdminController = require("../controllers/subAdminController");
const postController = require("../controllers/postController");
const customerController = require("../controllers/customerController");
const categoryController = require("../controllers/categoryController");
const orderController = require("../controllers/orderController");
const productController = require("../controllers/productController");
const order_itemController = require("../controllers/order_itemController.js");
const paymentController = require("../controllers/paymentController");
const shipmentController = require("../controllers/shipmentController");
const cartController = require("../controllers/cartController");
const wishlistController = require("../controllers/wishlistController");

// User Routes
router.get("/users/create", userController.create);
router.get("/users/read", userController.read);
router.get("/users/delete", userController.delete);
router.get("/users/update", userController.update);

// Admin Routes
router.get("/admins/create", adminController.create);
router.get("/admins/read", adminController.read);
router.get("/admins/delete", adminController.delete);
router.get("/admins/update", adminController.update);

// Sub-admin Routes
router.get("/subadmins/create", subAdminController.create);
router.get("/subadmins/read", subAdminController.read);
router.get("/subadmins/delete", subAdminController.delete);
router.get("/subadmins/update", subAdminController.update);

// Post Routes
router.get("/posts/create", postController.create);
router.get("/posts/read", postController.read);
router.get("/posts/delete", postController.delete);
router.get("/posts/update", postController.update);

// Customer Routes
router.get("/customers/create", customerController.create);
router.get("/customers/read", customerController.read);
router.get("/customers/delete", customerController.delete);
router.get("/customers/update", customerController.update);

// Category Routes
router.get("/categories/create", categoryController.create);
router.get("/categories/read", categoryController.read);
router.get("/categories/delete", categoryController.delete);
router.get("/categories/update", categoryController.update);

// Order Routes
router.get("/orders/create", orderController.create);
router.get("/orders/read", orderController.read);
router.get("/orders/delete", orderController.delete);
router.get("/orders/update", orderController.update);

// Product Routes
router.get("/products/create", productController.create);
router.get("/products/read", productController.read);
router.get("/products/delete", productController.delete);
router.get("/products/update", productController.update);

// Order Item Routes
router.get("/orderitems/create", order_itemController.create);
router.get("/orderitems/read", order_itemController.read);
router.get("/orderitems/delete", order_itemController.delete);
router.get("/orderitems/update", order_itemController.update);

// Payment Routes
router.get("/payments/create", paymentController.create);
router.get("/payments/read", paymentController.read);
router.get("/payments/delete", paymentController.delete);
router.get("/payments/update", paymentController.update);

// Shipment Routes
router.get("/shipments/create", shipmentController.create);
router.get("/shipments/read", shipmentController.read);
router.get("/shipments/delete", shipmentController.delete);
router.get("/shipments/update", shipmentController.update);

// Cart Routes
router.get("/carts/create", cartController.create);
router.get("/carts/read", cartController.read);
router.get("/carts/delete", cartController.delete);
router.get("/carts/update", cartController.update);

// Wishlist Routes
router.get("/wishlists/create", wishlistController.create);
router.get("/wishlists/read", wishlistController.read);
router.get("/wishlists/delete", wishlistController.delete);
router.get("/wishlists/update", wishlistController.update);
module.exports = router;
