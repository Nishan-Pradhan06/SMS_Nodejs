// Import necessary packages and modules
const express = require('express'); // Import the Express framework
const { studentsmanagement } = require('./model/index'); // Import the studentsmanagement model
const app = express(); // Create an Express application

// Configure the view engine as EJS
app.set('view engine', 'ejs');

// Serve static files from the "public" folder (e.g., CSS and JS files)
app.use(express.static("public/"));

// Connect to the MySQL database (assuming this is done in the "./model/index" file)

// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Define routes and their handlers
//auth route page
app.get("/", async (req, res) => {
    res.render("auth/login");
});
// Handle the update route (you need to implement this)
app.get("/login", (req, res) => {
    res.render("auth/login"); // Check the correct path for rendering
});



//admin route page
app.get("/admin", async (req, res) => {
    res.render("admin/admin");
});
// Render the dashboard page
app.get("/admin/dashboard", async (req, res) => {
    const studentCount = await studentsmanagement.findAll(); // Retrieve all students
    res.render("admin/addashboard", { allstudents: studentCount.length });
});
// Render the createStudents form page
app.get("/admin/createstudents", (req, res) => {
    res.render("admin/createStudents");
});
// Render the studentlists page 
app.get("/admin/studentlists", (req, res) => {
    res.render("admin/viewstudent"); // Check the correct path for rendering
});
// Render the admin library page 
app.get("/admin/library", (req, res) => {
    res.render("admin/adlibrary"); // Check the correct path for rendering
});


// Handle POST request to add a new student
app.post("/createstudent", async (req, res) => {
    const { name, address, contact, class: stdFaculty, bloodgroup } = req.body;

    await studentsmanagement.create({
        name,
        address,
        contact,
        class: stdFaculty,
        bloodgroup,
    });

    res.redirect("/admin/studentlists");
});
// Handle GET request to update a specific student
app.get("/update/:id", (req, res) => {
    const studentId = req.params.id;
    console.log("Updating student with ID:", studentId);
});



//student route page
// Render the index page
app.get("/student", async (req, res) => {
    res.render("student/index");
});
// Render the dashboard page
app.get("/student/dashboard", async (req, res) => {
    const studentCount = await studentsmanagement.findAll(); // Retrieve all students
    res.render("student/addashboard", { allstudents: studentCount.length });
});
// Render the library page 
app.get("/student/library", (req, res) => {
    res.render("student/library"); // Check the correct path for rendering
});
// Render the onlineclass page 
app.get("/student/onlineclass", (req, res) => {
    res.render("student/onlineclass"); // Check the correct path for rendering
});
// Render the library page 
app.get("/student/homework", (req, res) => {
    res.render("student/homework"); // Check the correct path for rendering
});








// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
