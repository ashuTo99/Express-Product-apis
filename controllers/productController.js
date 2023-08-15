const Product = require("../models/Product");

// Get All products
const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
      } catch (error) {
        res.json({ message: error });
      }
};


// Add New product
const product_create = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
      });
    
      try {
        const savedProduct = await product.save();
        res.send(savedProduct);
      } catch (error) {
        res.status(400).send(error);
      }
};

 
// Get All products
const product_details = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
      } catch (error) {
        res.json({ message: error });
      }
};



const update_product = async (req, res) => {
    const product = {
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
      };
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
            { _id: req.params.productId},
            product
          );
        res.send({"data":updatedProduct,"message": "Product updated successfully"});
      } catch (error) {
        res.status(400).send(error);
      }
};

// Get All products
const delete_product = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        product.deleteOne()
        res.json({ message: 'Product deleted successfully'});
      } catch (error) {
        res.json({ message: error });
      }
};




module.exports = {
    product_all,
    product_create,
    product_details,
    delete_product,
    update_product,

   
}
