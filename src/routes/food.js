'use strict';

const express = require('express');
const router = express.Router();

// const foodModel = require('../models/food');
const Collection = require('../models/food-collection');
const food = new Collection();

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', addFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

async function getFood(req, res, next) {
  try {
    const result = await food.read(req.params.id);
    res.json({ result: result.rows });
  } catch (e) {
    next(e);
  }
}

async function addFood(req, res, next) {
  try {
    const result = await food.create(req.body);
    res.json(result.rows[0]);
  } catch (e) {
    next(e);
  }
}

async function updateFood(req, res, next) {
  try {
    const result = await food.update(req.params.id, req.body);
    res.json(result.rows[0]);
  } catch (e) {
    next(e);
  }
}

async function deleteFood(req, res, next) {
  try {
    const result = await food.delete(req.params.id);
    res.json(result.rows[0]);
  } catch (e) {
    next(e);
  }
}

module.exports = router;
