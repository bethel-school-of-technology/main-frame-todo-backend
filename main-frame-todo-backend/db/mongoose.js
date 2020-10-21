// this file will connect to the db
const mongoose = require('mongoose');
mongoose.promise=global.promise;
mongoose.connect;

module.exports = {
    mongoose
};