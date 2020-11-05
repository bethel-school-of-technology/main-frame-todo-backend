const mongoose = require('mongoose');
//require mongoose
var schema = mongoose.Schema;
//define schema
const ContactSchema = new mongoose.Schema({
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
      email: {
          a_date: Date,
          method: String,
          email: String
      }
});
//compile from schema
const Contact = mongoose.model('Contact', ContactSchema);
module.exports = { Contact };