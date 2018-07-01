
const mongojs = require('mongojs');
const db = mongojs('testCaseDB', ['employees', 'example4_results']);


const map4 = function() {
    console.log(this.businessUnit);
    var businessunit = this.businessID + "," + this.businessName;
    var bunit = businessunit.split(',');
    for (i in bunit) {
        emit(bunit[i], 1);
    }
};

const reduce4 = function (bunit, values) {
    count = 0;
    for (index in values) {
        count += values[index];
    }
    return count;
};
db.employees.mapReduce(
    map4,
    reduce4,
    {
        out: "example4_results"
    }
);

db.example4_results.find(function (err, docs) {
    if (err) console.log(err);
    console.log(docs);
});
