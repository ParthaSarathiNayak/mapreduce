import bodyparser from 'body-parser';
import express from 'express';
import router from '../src/routers/router';


// calls the express function
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
// ejs engine setting 
app.set('view engine', 'ejs');

app.use('/api', router);
// let employee = [{}];
// get the student details
router.get('/', (req, res) => {
    res.json(employees);
});

// created server at port 5000
app.listen(8000, () => {
    console.log('Sever listening at port number 8000');
});