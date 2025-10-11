const express = require("express");
const { registerUser, loginUser,getProfile,updateProfile } = require('../controllers/UserController.js');
const protect = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile" , protect,getProfile);
router.put("/profile" , protect, updateProfile);

module.exports = router;