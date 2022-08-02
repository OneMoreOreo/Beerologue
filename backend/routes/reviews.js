const express = require("express");
const router = express.Router();

const {
  getAllReviews,
  createReview,
  getReview,
  updateReview,
  deleteReview,
  putReview,
  deleteAllReviews,
} = require("../controllers/reviews");

router.route("/").get(getAllReviews).post(createReview).delete(deleteAllReviews);
router
  .route("/:id")
  .get(getReview)
  .patch(updateReview)
  .delete(deleteReview)
  .put(putReview);

module.exports = router;
