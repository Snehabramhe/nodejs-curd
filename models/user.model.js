const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },

    email: {
      type: String,
      required: [true, "Please enter email"],
    },

    age: {
      type: Number,
      required: true,
      default: 0,
    },

    phone: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", UserSchema);

module.exports = User;