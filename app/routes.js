// create a new express router
const express      = require('express'),
  router           = express.Router(),
  mainController   = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller'),
  usersController = require('./controllers/users.controller');

// export router
module.exports = router;

// define routes
// main routes home routes 
router.get('/', mainController.showHome);
router.get('/home', mainController.showText);
// router.get('/', mainController.showMain);

// event routes===========================================================
router.get('/events',       eventsController.showEvents);

// seed events
router.get('/events/seed',  eventsController.seedEvents);

// create events
router.get('/events/create',  eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

// show a single event
router.get('/events/:slug', eventsController.showSingle);

// edit events
router.get('/events/:slug/edit', eventsController.showEdit);
router.post('/events/:slug',     eventsController.processEdit);

// delete events
router.get('/events/:slug/delete', eventsController.deleteEvent);

//user routes =============================================================

// router.get('/', usersController.showUsers);
router.get('/users',       usersController.showUsers);
router.get('/users/create',     usersController.createUser);
router.post('/users/create',    usersController.processCreate);