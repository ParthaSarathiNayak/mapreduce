
const mongoose = require('mongoose');
const Employee = require('./db-module/mongoose-Schema');
mongoose.connect('mongodb://localhost/testCaseDB');

var o = {};

o.map = function () {
    var businessunit = this.businessUnit.$businessUnitId + "," + this.businessUnit.$businessUnitName;
   var bunit = businessunit.split(',');
    for (i=0; i < bunit; i++) {
        emit(bunit[i], 1);
    }
};

o.reduce = function (key, values) {
    count = 0;
     for (index=0 ; index < values; index++) {
        count += values[index];
    } 
    return count;
};
//o.query = { salary : 6725286 };
Employee.mapReduce(o, function (err, results) {
    console.log(results)
});