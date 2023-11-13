const express = require("express");

const router = express.Router();

const adminLogin = require("../controllers/login");

router.post("/setLogin", adminLogin.setLogin);
router.post("/refreshToken", adminLogin.refreshToken);
router.post("/logout", adminLogin.logout);

module.exports = router;
