const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const passport = require("passport")
const session = require("express-session")
const config = require('./Eric-Tumuhairwe/tech assess/config/database');
const User = require("./Eric-Tumuhairwe/tech assess/models/userModels")






const userRoutes = require('./Eric-Tumuhairwe/tech assess/routes/userRoutes')

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  }))

app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



// creating a connection between controller and database
mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = mongoose.connection
  // checking if db has connected
  db.once ('open', ()=> {
    console.log('connected to db')
  })
  db.on ('error', (err)=> {
    console.error(err)
  })







app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',userRoutes)


app.get('/error', function(req, res) {
    res.status(404).render('error', {
        title: 'Page Not Found',
        message: 'The page you are looking for could not be found.'
    });
  });




app.listen(process.env.port || 3007,()=>
console.log('listening on port 3007'))