const exp = require("constants");
const carteModel = require("../models/carte");

exports.getAllCarte = (req, res, next) => {
  carteModel
    .find()
    .then((carte) => res.status(201).json(carte))
    .catch((error) => res.status(400).json({ error }));
};

exports.getACarte = (req, res, next) => {
  carteModel
    .findOne({ _id: req.params.id })
    .then((carte) => res.status(201).json(carte))
    .catch((error) => res.status(400).json({ error }));
};

exports.createItem = (req, res, next) => {
  const Item = new carteModel({
    ...req.body,
  });
  Item.save()
    .then(() => res.status(201).json({ message: "objet créé" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteItem = (req, res, next) => {
  carteModel
    .deleteOne({ _id: req.params.id })
    .then((carte) => res.status(201).json({ message: "objet supprimé" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.modifyItem = (req, res, next) => {
  carteModel
    .updateOne(
      { _id: req.params.id },
      {
        ...req.body,
        _id: req.params.id,
      }
    )
    .then(() => res.status(201).json({ message: "objet modifié" }))
    .catch((error) => res.status(400).json({ error }));
};
