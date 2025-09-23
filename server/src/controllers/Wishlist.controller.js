import Wishlist from "../models/Wishlist.model.js";



// @desc    Get logged-in user's wishlist
// @route   GET /api/v1/wishlist
// @access  Private
export const getWishlist = async (req, res, next) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id }).populate("products");
    res.json({ success: true, data: wishlist || { products: [] } });
  } catch (err) {
    next(err);
  }
};

// @desc    Add product to wishlist
// @route   POST /api/v1/wishlist
// @access  Private
export const addToWishlist = async (req, res, next) => {
  try {
    const { productId } = req.body;
    if (!productId) return res.status(400).json({ success: false, message: "Product ID required" });

    let wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) {
      wishlist = new Wishlist({ user: req.user._id, products: [productId] });
    } else if (!wishlist.products.includes(productId)) {
      wishlist.products.push(productId);
    }

    await wishlist.save();
    res.status(201).json({ success: true, data: wishlist });
  } catch (err) {
    next(err);
  }
};

// @desc    Remove product from wishlist
// @route   DELETE /api/v1/wishlist/:productId
// @access  Private
export const removeFromWishlist = async (req, res, next) => {
  try {
    const { productId } = req.params;
    let wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) return res.status(404).json({ success: false, message: "Wishlist not found" });

    wishlist.products = wishlist.products.filter(
      (p) => p.toString() !== productId.toString()
    );
    await wishlist.save();

    res.json({ success: true, data: wishlist });
  } catch (err) {
    next(err);
  }
};
