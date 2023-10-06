// Import necessary packages and modules
const express = require('express'); // Import the Express framework
// const { studentsmanagement } = require('./model/index'); // Import the studentsmanagement model
const { renderAuthLogin, renderAdmin, renderCreatestd, renderAdminDashboard, renderViewStudentlists, renderLibrary, renderPostCreatestd, renderStdHome, renderStdDashboard, renderStdLibrary, renderStdOnlineClass, renderStdHW } = require('./controllers/sms/smsController');
const app = express(); // Create an Express application

app.set('view engine', 'ejs');// Configure the view engine as EJS

app.use(express.static("public/"));// Serve static files from the "public" folder (e.g., CSS and JS files)

// Connect to the MySQL database (assuming this is done in the "./model/index" file)
// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route
const adminRoute = require("./routes/adminRoute")
const authRoute = require("./routes/authRoute")
const stdRoute = require("./routes/stdRoute")
app.use("", authRoute)
app.use("", adminRoute)
app.use("",stdRoute)
// Define routes and their handlers
// app.get("/login", renderAuthLogin);//auth route page

//administrator 
// app.get("/admin", renderAdmin);//admin route page
// app.get("/admin/dashboard", renderAdminDashboard);// Render the dashboard page
// app.get("/admin/createstudents", renderCreatestd);// Render the createStudents form page
// app.get("/admin/studentlists", renderViewStudentlists);// Render the studentlists page 
// app.get("/admin/library", renderLibrary);// Render the admin library page 
// app.post("/createstudent", renderPostCreatestd);// Handle POST request to add a new student


//student route page
// app.get("/student", renderStdHome);// Render the index page
// app.get("/student/dashboard", renderStdDashboard);// Render the dashboard page
// app.get("/student/library", renderStdLibrary);// Render the library page 
// app.get("/student/onlineclass", renderStdOnlineClass);// Render the onlineclass page
// app.get("/student/homework", renderStdHW);// Render the library page 




// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
