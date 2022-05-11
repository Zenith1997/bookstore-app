const express = require("express");
const Book = require("../models/Book");
const booksController = require("../controllers/Books-controller")
const router = express.Router();

router.get("/",booksController.getAllBooks)
router.get("/:id",booksController.getById)
router.post("/",booksController.addBook)
router.post("/:id",booksController.UpdateBook)
router.delete("/:id",booksController.deleteBook)
module.exports = router;  