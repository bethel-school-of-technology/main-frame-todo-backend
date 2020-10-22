// this file will connect to the db
const mongoose = require('mongoose');
mongoose.promise=global.promise;
mongoose.connect('mongodb+srv://dbuser:Password1!@cluster0.g6zcn.mongodb.net/todo?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((e)=>{
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};