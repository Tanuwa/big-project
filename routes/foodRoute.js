var express = require("express");
var foodRoutes = express.Router();
var Food = require("../models/food");


foodRoutes.route("/")
	.get(function (req, res) {
		Food.find(function (err, food) {
			return res.send(food);
		});

	})
	.post(function (req, res) {
		var newFood = new Food(req.body);
		newFood.save(function (err, food) {
			if (err) return res.status(500).send(err);
			res.status(201).send(food);

		});
	});

foodRoutes.route("/:id")
	.put(function (req, res) {
		Food.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		}, function (err, updatedFood) {
			if (err) return res.status(500).send(err);
			res.status(201).send(updatedFood);

		});
	})
	.delete(function (req, res) {
		Food.findByIdAndRemove(req.params.id,
			function (err, food) {
				if (err) return res.status(500).send(err);
				res.status(201).send(food);
			});

	})
	.get(function (req, res) {
		Food.findOne({
				_id: req.params.id
			},
			function (err, food) {
				if (err) return res.status(500).send(err);
				res.status(201).send(food);

			});
	});

module.exports = foodRoutes;
