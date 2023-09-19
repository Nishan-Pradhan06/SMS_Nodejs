const express = require('express') ///require express package
const { studentsmanagement } = require('./model/index')
const app = express() //calling the express in app varible

app.set('view engine', 'ejs') // setting the  view engine to ejs

app.get("/", async (req, res) => {
    const std_management = await studentsmanagement.findAll()
    console.log(std_management.length)
    res.render("index", { studentsmanagement: std_management, allstudents: std_management.length })//rendering index page                           
})

// //rendering dashboard form page
// app.get("/dashboard", async (req, res) => {
//     const allstudent = await studentsmanagement.findAll()
//     // console.log(allstudent.length)
//     res.render("dashboard");

//     // res.render("dashboard")
// })


//provding acess to the public floder where all the css and js file included
app.use(express.static("public/"))

//adding database mysql
require("./model/index")

//rendering createStudents form page
app.get("/createStudents", (req, res) => {
    res.render("createStudents")
})

//form bata data aairaxa parse gar na vha or handel gar vhaneko ho
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//creating post methond to create or add the data
app.post("/addStudents", async (req, res) => {
    // console.log(req.body)
    const name = req.body.name
    const address = req.body.address
    const contact = req.body.contact
    const stdFaculty = req.body.class
    const bloodgroup = req.body.bloodgroup

    await studentsmanagement.create({
        name: name,
        address: address,
        contact: contact,
        class: stdFaculty,
        bloodgroup: bloodgroup,
        // stdaddress: stdAddress,
    })
    res.redirect("/")

})


//setting the port on 8000  
app.listen(3000, () => {
    console.log("Server is running on 3000 port")
})