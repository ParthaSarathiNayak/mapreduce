
const mongojs = require('mongojs');
const db = mongojs('testCaseDB', ['employees', 'example3_results']);


const map3 = function () {
    const name = this.firstName + " " + this.middleName + " " + this.lastName;
    emit(name, 1);

};

const reduce3 = function (name, count) {
    return Array.sum(count);
};
db.employees.mapReduce(
    map3,
    reduce3,
    {
        query: { name: 'BR_jp7lYWr nSs9J_ffSk baLGzedZur' },
        out: "example3_results"
    }
);

db.example3_results.find(function (err, docs) {
    if (err) console.log(err);
    console.log(docs);
});


