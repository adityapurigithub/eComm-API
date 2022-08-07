const express = require("express");
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductsController");

const router = express.Router();

// router.get("/", function (req, res) {
//   res.send("/");
// });

//HTTP req...get, post , delete is implemented....
router.get("/products", getProducts);

router.post("/products/create", createProduct);

router.post("/products/update_quantity/:_id/", updateProduct);

router.delete("/products/:_id", deleteProduct);

module.exports = router;
