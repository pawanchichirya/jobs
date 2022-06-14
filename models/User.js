import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"],
    minLength: 3,
    maxLength: 30,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    validate:{
        validator:validator.isEmail,
        message:'please provide valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide password"],
    minLength: 6,
  },
  lastName: {
    type: String,
    default: "lastName",
    maxLength: 30,
    trim: true,
  },
  location: {
    type: String,
    maxLength: 30,
    trim: true,
    default: "my city",
  },
});

export default mongoose.model("User", UserSchema);
