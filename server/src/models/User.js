import mongoose  from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
  {  
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    phone: { type: String },
    addresses: [
      {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String,
      },
    ],
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
)


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
  
export default mongoose.model("User", userSchema);