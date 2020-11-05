/**
 * Module dependencies.
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const chalk = require('chalk');
const mongoose = require('./db/mongoose');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
// app
const app = express();
//db models 
const { User } = require('./db/models/user.model');
const { Task } = require('./db/models/task.model');
//app routes
app.use('/', indexRouter);
app.use('/user', userRouter);
// bring routes
const routes = require("./routes");
app.get('/.routes/', (req, res) => {
  //return routes
})
//roots
app.use(bodyParser.json());

app.get('/user', (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  });
});
/** text here//** */
app.post('/user', (req, res) => {
  let title = req.body.title;

  let newUser = new User({
    title
  });
  newUser.save().then((userDoc) => {
    res.send(userDoc);
  })
});

app.patch('/user/:id', (req, res) => {

});

app.delete('/user/:id', (req, res) => {

});

app.get('/task/', (req, res) => {
  Task.find({}).then(() => {
    res.send(tasks);
  });
});
app.post('/task/', (req, res, next) => {
  let title = req.body.title;

  let newTask = new Task({
    title
  });
  newTask.save().then((taskDoc) => {
    res.send(taskDoc);
  })
});

app.patch('/task', (req, res) => {

});

app.delete('/task', (req, res) => {

});
/* Start Express server.
*/
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
