import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: String,
  postalCode: String,
});

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    phone: { type: String },
    addresses: [addressSchema],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],

    
    refreshTokens: [
      {
        tokenHash: { type: String },
        createdAt: { type: Date, default: Date.now },
        expiresAt: { type: Date }, 
      },
    ],
  },
  { timestamps: true }
);


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.addRefreshToken = async function (token, ttlDays = 30) {
  const hash = crypto.createHash("sha256").update(token).digest("hex");
  const expiresAt = new Date(Date.now() + ttlDays * 24 * 60 * 60 * 1000);
  this.refreshTokens.push({ tokenHash: hash, expiresAt });
  await this.save();
};

userSchema.methods.removeRefreshToken = async function (token) {
  const hash = crypto.createHash("sha256").update(token).digest("hex");
  this.refreshTokens = this.refreshTokens.filter((r) => r.tokenHash !== hash);
  await this.save();
};

userSchema.methods.hasRefreshToken = function (token) {
  const hash = crypto.createHash("sha256").update(token).digest("hex");
  return this.refreshTokens.some((r) => r.tokenHash === hash && (!r.expiresAt || r.expiresAt > new Date()));
};

export default mongoose.model("User", userSchema);
