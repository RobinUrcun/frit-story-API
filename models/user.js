const mongoose = require("mongoose");
const UniqueValidator = require("mongoose-unique-validator");

const UserSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.plugin(UniqueValidator);

module.exports = mongoose.model("user", UserSchema);
