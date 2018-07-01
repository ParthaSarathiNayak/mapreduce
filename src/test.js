
const mongoose = require('mongoose');
const Employee = require('./db-module/mongoose-Schema');
mongoose.connect('mongodb://localhost/testCaseDB');

var o = {};

o.map = function () {
    const name = this.firstName + " " + this.middleName + " " + this.lastName;
    const salary = this.salary;
    emit(name, salary);

};

o.reduce = function (salary, count) {
    return ` salary is ${Array.sum(count)};`
};
//o.query = { salary : 6725286 };
Employee.mapReduce(o, function (err, results) {
    console.log(results)
});