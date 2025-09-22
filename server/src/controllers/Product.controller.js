import Product from "../models/Product.js";

// @desc    Get all products with filters & pagination
// @route   GET /api/v1/products
// @access  Public
export const getProducts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, category, price_min, price_max, sort } = req.query;

    const filter = {};
    if (category) filter.category = category;
    if (price_min || price_max) {
      filter.price = {};
      if (price_min) filter.price.$gte = Number(price_min);
      if (price_max) filter.price.$lte = Number(price_max);
    }

    const sortOption = sort ? { [sort]: 1 } : { createdAt: -1 };

    const products = await Product.find(filter)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Product.countDocuments(filter);

    res.json({
      success: true,
      page: Number(page),
      pages: Math.ceil(total / limit),
      total,
      data: products,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single product by ID
// @route   GET /api/v1/products/:id
// @access  Public
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new product
// @route   POST /api/v1/products
// @access  Admin
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, images, category, fragranceNotes, stock } = req.body;

    const product = new Product({
      name,
      description,
      price,
      images,
      category,
      fragranceNotes,
      stock,
    });

    const createdProduct = await product.save();
    res.status(201).json({ success: true, data: createdProduct });
  } catch (err) {
    next(err);
  }
};

// @desc    Update product
// @route   PUT /api/v1/products/:id
// @access  Admin
export const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    const fields = ["name", "description", "price", "images", "category", "fragranceNotes", "stock", "isFeatured"];
    fields.forEach((field) => {
      if (req.body[field] !== undefined) product[field] = req.body[field];
    });

    const updatedProduct = await product.save();
    res.json({ success: true, data: updatedProduct });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete (or archive) product
// @route   DELETE /api/v1/products/:id
// @access  Admin
export const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    await product.deleteOne();
    res.json({ success: true, message: "Product removed" });
  } catch (err) {
    next(err);
  }
};
