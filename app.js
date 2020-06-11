require ('dotenv').config()
var express = require('express')
var app = express()
var user = require('./controllers/usercontrol')
var post = require('./controllers/postcontrol')
var sequelize = require('./db')

const db = require ('./db');
db.sync();

app.use(express.json()); 
app.use(require('./middleware/headers'));

// giving express to host at
app.get('/', (req, res) => res.render('index'));


sequelize.sync()

app.use("/user", user)

app.use("/post", post)



// app.get("/post", (req, res) => {
//     database.find({}, (err, data) => {
//     res.json(data);
//     });
// });

app.get("/login", function(req, res){
    res.get('login page route')
})

app.get("/", function(req, res){
    res.send('test route')
})

app.listen(process.env.PORT, () =>{
    console.log(`server is working on ${process.env.PORT}`);
});