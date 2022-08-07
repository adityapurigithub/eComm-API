const Product = require("../models/product");

//controller function for getting the products from db...
module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); //find all the products
    res.send(products); //res will send the object on page..../products
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

//controller function creating and storing  the products to db.....
module.exports.createProduct = async (req, res) => {
  try {
    //add the product in db...
    const addProduct = new Product(req.body);
    //saving the product in db...
    // console.log(req.body);

    const saveProduct = await addProduct.save();
    console.log("product added...");
    // console.log(saveProduct);

    res.send(saveProduct);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

//controller function for updating the products....

module.exports.updateProduct = async (req, res) => {
  try {
    const _id = req.params._id;
    //beloq is how i check for updating the quantity....
    // http://localhost:8000/products/update_quantity/123123478a7b6d5e/?quantity=20
    const updateProduct = await Product.findByIdAndUpdate(
      { _id },
      { quantity: req.query.quantity }
    );
    console.log("updated!!!");
    res.send(updateProduct);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

//controller function for deleting the products....
module.exports.deleteProduct = async (req, res) => {
  try {
    const _id = req.params._id;
    const deleteProduct = await Product.findByIdAndDelete(_id);
    res.send(deleteProduct);
    console.log("product deleted");
  } catch (err) {
    res.status(500).send(err); //if any err...ISE, it will show...
  }
};
