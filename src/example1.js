
const mongojs = require('mongojs');
const db = mongojs('testCaseDB', ['employees', 'example1_results']);


const map1 = function () {
    var name = this.firstName + " " + this.middleName + " " + this.lastName;
    emit(name, 1);

};

const reduce1 = function (name, values) {
    count = 0;
    for (i in values.length) {
        count += values[i];
    }
    return count;
};
db.employees.mapReduce(
    map1,
    reduce1,
    {
        out: "example1_results"
    }
);

db.example1_results.find(function (err, docs) {
    if (err) console.log(err);
    console.log(docs);
});


// fetching location

/*  const mapped = function(){
    emit(this.salary ,1);
}
const reduced = function(salary , count){
    return Array.sum(count);
}
db.employees.mapReduce(
    mapped,
    reduced,
    {
        out: "example1_results"
    }
);


db.example1_results.find((err,docs)=>{
    if(err) throw err;
    console.log(docs)
})
  */

