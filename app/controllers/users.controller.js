const User = require('../models/user');

/**
 * Show all events
 */

const users = [
      { name: 'Salma', email: 'gugly2009@gmail.com', number: 0012330,password:"1111",address:"Dhaka"},
      { name: 'SalmaKona', email: 'salma.kona@gmail.com', number: 0012330,password:"1111",address:"Dhaka"}
 ];

function showUsers(req, res) {
    //res.render('pages/users', { users: users });
  // get all events   
  User.find({}, (err, users) => {
    if (err) {
      res.status(404);
      res.send('users not found!');
    }

    // return a view with data
    res.render('pages/users', { 
      users: users,
      success: req.flash('success')
    });
  });
}

function  createUser(req, res){
     res.render('pages/createusers');
}

/**
 * Process the creation form
 */
function processCreate(req, res) {
  // validate information
  req.checkBody('name', 'Name is required.');
  req.checkBody('email', 'Email is required.');
  req.checkBody('number', 'Email is required.');
  req.checkBody('address', 'Email is required.');
  // if there are errors, redirect and save errors to flash
  const errors = req.validationErrors();
  if (errors) {
    req.flash('errors', errors.map(err => err.msg));
    console.log("ERROR EVENT Create !")
    return res.redirect('/users/create');
  }

  // create a new event
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    address: req.body.address
  });

  // save event
  user.save((err) => {
    if (err)
      throw err;

    // set a successful flash message
    req.flash('success', 'Successfuly created User!');

    // redirect to the newly created event
    res.redirect(`/users`);
  });
}


module.exports = {
  showUsers: showUsers,
  createUser:createUser,
  processCreate:processCreate
}