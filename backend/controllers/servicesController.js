const db = require("../models");

module.exports = {
    findAll: (req,res) => {
        db.Services
        .find(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    findById: (req,res) => {
        db.Services
        .findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    create: (req,res) => {
        db.Services
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    update: (req,res) => {
        db.Services
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    delete: (req,res) => {
        db.Services
        .findById({ _id: req.params.id })
        .then(data => data.remove())
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    }
}