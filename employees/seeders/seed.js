var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/serviceWorkerDemo", {
  useNewUrlParser: true
});

var empSeed = [
  {
    employeeid: 001,
    firstname: "Jane",
    middlename: "Anne",
    lastname: "Doe",
    title: Ms,
    managerid: null,
    jobtitle: "Personal Assistant",
    salary: 35000
  },
  {
    employeeid: 002,
    firstname: "Peter",
    middlename: "Fred",
    lastname: "Thompson",
    title: Mr,
    managerid: null,
    jobtitle: "General Manager",
    salary: 250000
  },
  {
    employeeid: 002,
    firstname: "Timothy",
    middlename: null,
    lastname: "Franks",
    title: Mr,
    managerid: null,
    jobtitle: "Maintenance manager",
    salary: 250000
  }
];

db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(empSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
