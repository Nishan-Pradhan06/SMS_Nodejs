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

// Render the index page
app.get("/dash", async (req, res) => {
    res.render("index");
});
app.get("/", async (req, res) => {
    res.render("auth/login");
});

// Render the dashboard page
app.get("/dashboard", async (req, res) => {
    const studentCount = await studentsmanagement.findAll(); // Retrieve all students
    res.render("dashboard", { allstudents: studentCount.length });
});

// Render the createStudents form page
app.get("/createstudents", (req, res) => {
    res.render("createStudents");
});

// Render the studentlists page 
app.get("/studentlists", (req, res) => {
    res.render("viewstudent"); // Check the correct path for rendering
});

// Render the library page 
app.get("/library", (req, res) => {
    res.render("library"); // Check the correct path for rendering
});

// Render the library page 
app.get("/login", (req, res) => {
    res.render("auth/login"); // Check the correct path for rendering
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

    res.redirect("/studentlists");
});

// Handle the update route (you need to implement this)

// Handle GET request to update a specific student
app.get("/update/:id", (req, res) => {
    const studentId = req.params.id;
    console.log("Updating student with ID:", studentId);
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
