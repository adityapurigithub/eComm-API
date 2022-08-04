const Product = require("../models/product");

module.exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    //add the product in db...
    const addProduct = new Product(req.body);
    //saving the product in db...
    console.log(req.body);

    const saveProduct = await addProduct.save();
    console.log("product added...");
    console.log(saveProduct);

    res.send(saveProduct);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const _id = req.params._id;
    const updateProduct = await Product.findByIdAndUpdate({ _id }, req.body);
    console.log("updated!!!");
    res.send(updateProduct);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const _id = req.params._id;
    const deleteProduct = await Product.findByIdAndDelete(_id); //{_id:_id}, here i used object destructuring
    res.send(deleteProduct); // to show the data, that it has saved
    console.log("product deleted");
  } catch (e) {
    res.status(500).send(e); //500 indicates, server related error
  }
};
