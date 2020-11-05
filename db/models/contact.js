const { Model } = require("mongoose");
//require mongoose
const mongoose = require('mongoose');
var schema = mongoose.Schema;
//define schema
const contactSchema = new mongoose.Schema;

var contact = newSchema({
    Contact: {
        name: String,
        phone: Number,
        email: String
    },
    name: {
        type: String,
        required: [true, 'A person must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'name name maximum character length exceeded'],
        minlength: [10, 'name name mininum character length not met']
      },
    Contacts: String,
    Model: String,
    a_date: Date,
    method: String,
    email: String
});
//compile from schema
var ContactModel = mongoose.model('Contact', contact)
module.exports = ContactModel;