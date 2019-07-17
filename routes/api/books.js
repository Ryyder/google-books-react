const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// on this route, we get and post query
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// on this route, we get, update, and delete
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
