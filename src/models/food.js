'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type: String, required: true },
  ingridents: { type: String },
  caluries: { type: Number },
});

const foodModel = mongoose.model('Food', foodSchema);

module.exports = foodModel;
