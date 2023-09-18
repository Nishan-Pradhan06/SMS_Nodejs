const express = require('express') ///require express package
const app = express() //calling the express in app varible

app.set('view engine', 'ejs') // setting the  view engine to ejs

app.get('/', (req, res) => {
    res.render("index")//rendering index page                           
})

//provding acess to the public floder where all the css and js file included
app.use(express.static("public/"))


//setting the port on 8000  
app.listen(8000, () => {
    console.log("Server is running on 8000 port")
})