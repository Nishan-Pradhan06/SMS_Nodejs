const { renderStdHome, renderStdHW, renderStdOnlineClass, renderStdLibrary, renderStdDashboard } = require("../controllers/sms/smsController");

const router = require("express").Router()

router.route("/student").get(renderStdHome)
router.route("/student/dashboard").get(renderStdDashboard)
router.route("/student/library").get(renderStdLibrary)
router.route("/student/onlineclass").get(renderStdOnlineClass)
router.route("/student/homework").get(renderStdHW)
module.exports = router;