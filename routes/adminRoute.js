const { renderAdmin, renderAdminDashboard, renderCreatestd, renderPostCreatestd, renderViewStudentlists, renderLibrary } = require("../controllers/smsController")

const router = require("express").Router()

router.route("/admin").get(renderAdmin)
router.route("/admin/dashboard").get(renderAdminDashboard)
router.route("/admin/createstudents").get(renderCreatestd)
router.route("/admin/studentlists").get(renderViewStudentlists)
router.route("/admin/library").get(renderLibrary)
router.route("/admin/createstudent").post(renderPostCreatestd)

module.exports = router;