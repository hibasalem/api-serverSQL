'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  type: { type: String, required: true },
  session: { type: String },
  price: { type: Number },
  avilable: { type: Boolean },
});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;
