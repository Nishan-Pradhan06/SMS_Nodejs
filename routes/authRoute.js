const { renderAuthLogin } = require("../controllers/sms/smsController");

const router = require("express").Router();

router.route("/login").get(renderAuthLogin);

module.exports = router;