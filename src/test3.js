
const mongoose = require('mongoose');
const Employee = require('./db-module/mongoose-Schema');
mongoose.connect('mongodb://localhost/testCaseDB');

var o = {};

o.map = function () {
    const name = this.firstName + " " + this.middleName + " " + this.lastName;
    const empId = this.employeeId;
    emit(name, empId);

};

o.reduce = function (empId, values) {
    return ` EmployeeId is ${values[0]};`
};
//o.query = { salary : 6725286 };
Employee.mapReduce(o, function (err, results) {
    console.log(results)
});