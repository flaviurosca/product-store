import mongoose from "mongoose";
import Product from "../models/product.model.js";

/**
 * @desc Get all products
 * @route GET /api/products
 */
export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Create new product
 * @route POST /api/products
 */
export const createProduct = async (req, res, next) => {
  const { name, price, image } = req.body;

  if (!name || !price || !image) {
    const error = new Error("Please provide all fields");
    error.status = 400;
    return next(error);
  }

  const newProduct = new Product({ name, price, image });

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Update a product
 * @route PUT /api/products/:id
 */
export const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("Invalid Product Id");
    error.status = 404;
    return next(error);
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    if (!updatedProduct) {
      const error = new Error("Product not found");
      error.status = 404;
      return next(error);
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc Delete a product
 * @route DELETE /api/products/:id
 */
export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error("Invalid Product Id");
    error.status = 404;
    return next(error);
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      const error = new Error("Product not found");
      error.status = 404;
      return next(error);
    }

    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    next(error);
  }
};
