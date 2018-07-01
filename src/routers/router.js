import bodyparser from 'body-parser'
import express from 'express'
import Employee from '../db-module/mongoose-Schema'


const router = express.Router();
const app = express();

app.use(bodyparser.json({ limit: '1000mb' }));
app.use('/emp', router);

router.get('/emp', (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'Student Cannot be empty!' });
    }
    Employee.find({}).then((data) => {
        Employee.count({}).then((number) => {
            res.send(data);
            console.log(JSON.stringify({ number }));
        })
    }).catch((error) => {
        console.error(error.message);
        res.send({ err: error.message });
    });
});


router.post('/emp', (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: 'Employee Cannot be empty!' });
    }
    Employee.create(req.body).then((emp) => {
        res.status(200).json(emp);
    }).catch((error) => {
        console.error(error.message);
        res.send({ err: error.message });
    });
})


module.exports = router;