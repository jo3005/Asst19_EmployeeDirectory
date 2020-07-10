var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    employeeid: Number,
    firstname: { type: String, required: true },
    middlename: {type:String,required: false},
    lastname: { type: String, required: true },
    title: { type: String, required: true },
    dob:{Date, required:false},
    email: { type: String, required: true },
    managerid: Number,
    jobtitle: { type: String, required: true },
    salary: { type: Number }
});

var Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;