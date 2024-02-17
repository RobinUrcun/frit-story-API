const mongoose = require("mongoose");

const thingCarte = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imgurl: { type: String, required: false },
    category: { type: String, required: true },
    meat: { type: String, required: false },
    description: { type: String, required: false },
    ingredient: { type: Array, required: true },
    extra: { type: Array, required: false },
    hallal: { type: Boolean, required: true },
  },
  { versionKey: false }
);

module.exports = mongoose.model("carte", thingCarte);
