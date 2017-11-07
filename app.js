// grab our dependencies
const express = require('express'),
  path = require('path'),
  app = express(),
  flash = require('connect-flash'),
  expressValidation = require('express-validation'),
  expressValidator = require('express-validator'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  port = process.env.PORT || 8080;

var expressLayouts = require('express-ejs-layouts');
// configure our application

// set sessions and cookie parser
app.use(cookieParser());
app.use(session({
  secret: "XXXXYYYYY", 
  cookie: { maxAge: 60000 },
  resave: false,    // forces the session to be saved back to the store
  saveUninitialized: false  // dont save unmodified
}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(expressValidator());  //this line to be addded

app.use(express.static(path.join(__dirname, 'public')));

// set ejs as our templating engine =========================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);
app.use(expressLayouts);


// set the routes ==========================================

app.use(require('./app/routes'));
// app.use(expressValidator());



// connect database with mongose ==========================================
var mongoose = require('mongoose');
mongoose.connect('mongodb://olympic:olympic@ds145128.mlab.com:45128/olympic-events',{ useMongoClient: true });
mongoose.Promise = global.Promise;

// var Cat = mongoose.model('Cat', { name: String });
// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });


// start our server ==========================================
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});