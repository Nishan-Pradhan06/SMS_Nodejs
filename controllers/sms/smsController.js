const { studentsmanagement } = require("../../model");


//administrator page
exports.renderAuthLogin = (req, res) => {
    res.render("auth/login"); // Check the correct path for rendering
}
exports.renderAdmin = (req, res) => {
    res.render("admin/admin");
}
exports.renderAdminDashboard = async (req, res) => {
    const studentCount = await studentsmanagement.findAll(); // Retrieve all students
    res.render("admin/addashboard", { allstudents: studentCount.length });
}
exports.renderCreatestd = (req, res) => {
    res.render("admin/createStudents");
}
exports.renderViewStudentlists = (req, res) => {
    res.render("admin/viewstudent");
}
exports.renderLibrary = (req, res) => {
    res.render("admin/adlibrary");
}
exports.renderPostCreatestd = async (req, res) => {
    const { name, address, contact, class: stdFaculty, bloodgroup } = req.body;
    await studentsmanagement.create({
        name,
        address,
        contact,
        class: stdFaculty,
        bloodgroup,
    });

    res.redirect("/admin/studentlists");
}

//student page
exports.renderStdHome = (req, res) => {
    res.render("student/index");
}
exports.renderStdDashboard = async (req, res) => {
    const studentCount = await studentsmanagement.findAll(); // Retrieve all students
    res.render("student/dashboard", { allstudents: studentCount.length });
}
exports.renderStdLibrary = (req, res) => {
    res.render("student/library"); // Check the correct path for rendering
}
exports.renderStdOnlineClass = (req, res) => {
    res.render("student/onlineclass"); // Check the correct path for rendering
}
exports.renderStdHW = (req, res) => {
    res.render("student/homework"); // Check the correct path for rendering
}