const express = require('express') ///require express package
const app = express() //calling the express in app varible

app.set('view engine', 'ejs') // setting the  view engine to ejs

app.get('/', (req, res) => {
    res.render("index")//rendering index page                           
})

//provding acess to the public floder where all the css and js file included
app.use(express.static("public/"))

//adding database mysql
require("./model/index")

//rendering createStudents form page
app.get('createStudents', (req, res) => {
    res.render("createStudents")
})

//creating post methond to create or add the data
app.post('/createStudents', (req, res) => {
    const { fullName, address, contact, faculty, bloodGroup } = res.body
    
})


//setting the port on 8000  
app.listen(8000, () => {
    console.log("Server is running on 8000 port")
})