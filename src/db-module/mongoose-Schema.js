const mongoose = require('mongoose')
// import mongoose from 'mongoose';
// create Schema instance
// const { Schema } = mongoose;

const Schema = mongoose.Schema;

// connecting to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/testCaseDB', (err) => {
    if (err) throw err;
    console.log('Database connected successfully');
});
// create Schema and model
const employeeSchema = mongoose.Schema({
    employeeId: {
        type: String,

    },
    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    mobileNo: {
        type: Number,
    },
    businessUnit: {
        businessUnitId: {
            type: String,
        },
        businessUnitName: {
            type: String,
        },String,
    },
    experience: Number,
    salary: Number,
    hikePercentage: Number,
    yearEndRating : Number,

});

// Creating Student reference variable for model
const Employee = mongoose.model('employees', employeeSchema);

// Exporting the Student Model
// export default Student;

module.exports = Employee;
