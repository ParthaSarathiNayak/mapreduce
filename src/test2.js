
const mongoose = require('mongoose');
const Employee = require('./db-module/mongoose-Schema');
mongoose.connect('mongodb://localhost/testCaseDB');

var o = {};

o.map = function () {
    const name = this.firstName + " " + this.middleName + " " + this.lastName;
    emit(name, 1);

};

o.reduce = function (name, values) {
    count = 0;
    for (i in values.length) {
        count += values[i];
    }
    return count;
};
//o.query = { salary : 6725286 };
Employee.mapReduce(o, function (err, results) {
    console.log(results)
});