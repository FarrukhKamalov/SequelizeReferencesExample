const express = require('express');
const router = express.Router();
const RestaurantController = require("../controllers/restaurant.controller");
const BranchController = require("../controllers/branches.controller");
const restaurantController = require('../controllers/restaurant.controller');
const branchesController = require('../controllers/branches.controller');

router.get("/restaurants", RestaurantController.GET)
router.get("/branches", branchesController.GET)
router.post("/restaurants", restaurantController.POST);
router.post("/branches", branchesController.POST)
module.exports =  router