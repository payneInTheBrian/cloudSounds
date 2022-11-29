const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const feedController = require("../controllers/feed")

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);



router.put("/likePost/:id", feedController.likePost);


module.exports = router;
