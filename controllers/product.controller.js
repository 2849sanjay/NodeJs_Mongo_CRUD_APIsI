const { Error } = require("mongoose");
const Product = require("../models/product.model");


// add new product
const addProducts = async (req, res) => { }
// get all products

const getAllProducts = async (req, res) => {
   
    try {
        const products = Product.find();
        res.json(products);
    } catch (err) {
        res.json({ message: Error })
    }
};







// get single product

const getOneProduct = async (req, res) => { }
// update product
const updateProduct = async (req, res) => { }
// delete product
const deleteProduct = async (req, res) => { }

module.exports = {
    addProducts,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}

