const mongoose = require("mongoose");

let Review = require("../models/Review");

//GET Review
const getAllReviews = function (req, res, next) {
  Review.find(function (err, reviews) {
    if (err) {
      return next(err);
    }
    res.status(200).json(review);
  });
};

//POST Review
const createReview = function (req, res, next) {
  let review = new Review(req.body);

  review.save(function (err, review) {
    if (err) {
      return next(err);
    }
    res.status(201).json(review);
  });
};

//GET Review BY ID
const getReview = function (req, res, next) {
  Review.findById(req.params.id, function (err, review) {
    if (err) {
      return next(err);
    }

    if (review == null) {
      return res.status(404).json({ message: "Review Not Found" });
    }

    res.status(200).json(review);
  });
};

//PUT Review ID
const putReview = function (req, res, next) {
  let id = req.params.id;

  Review.findById(id, function (err, review) {
    if (err) {
      return next(err);
    }

    if (review == null) {
      return res.status(404).json({ message: "Review Not Found" });
    }

    review.name = req.body.name;
    review.brewery = req.body.brewery;
    review.category = req.body.category;
    review.photo = req.body.photo;
    review.reviewtext = req.body.reviewtext;

    review.save();

    res.status(200).json(review);
  });
};

//PATCH Review ID
const updateReview = function (req, res, next) {
  let id = req.params.id;

  Review.findById(id, function (err, review) {
    if (err) {
      return next(err);
    }

    if (review == null) {
      return res.status(404).json({ message: "Review Not Found" });
    }

    review.name = req.body.name || review.name;
    review.brewery = req.body.brewery || review.brewery;
    review.category = req.body.category || review.category;
    review.photo = req.body.photo || review.photo;
    review.reviewtext = req.body.reviewtext || review.reviewtext;

    review.save();

    res.status(200).json(review);
  });
};

//DELETE review BY ID
const deleteReview = function (req, res) {
  let id = req.params.id;

  Review.findOneAndDelete({ _id: id }, function (err, review) {
    if (err) {
      return next(err);
    }

    if (review == null) {
      return res.status(404).json({ message: "Review Not Found" });
    }

    res.status(200).json(review);
  });
};

//DELETE All Reviews
const deleteAllReviews = function (req, res, next) {
  Review.deleteMany({}, function (err, review) {
    if (err) {
      return next(err);
    }

    if (review == null) {
      return res.status(404).json({ message: "Review Not Found" });
    }

    res.status(200).json(review);
  });
};

module.exports = {
  getAllReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
  putReview,
  deleteAllReviews,
};
