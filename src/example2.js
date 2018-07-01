
const mongojs = require('mongojs');
const db = mongojs('testCaseDB', ['employees', 'example2_results']);

const map2 = function () {
    console.log('employee', this.employeeId);
    var empID = this.employeeId;
    emit(empID, 1);
};

const reduce2 = function (empID, values) {
    count = 0;
    for (i = 0; i < values.length; i++) {
        count += values[i];
    }
    return count;
};
db.employees.mapReduce(
    map2,
    reduce2,
    {
        out: "example2_results"
    }
);

db.example2_results.find(function (err, docs) {
    if (err) console.log(err);
    console.log(docs);
});
