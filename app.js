const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(helmet())
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

let employeeAPI = require('./routes/employee')

app.use('/api/v1', employeeAPI)

let port = 5000;
app.listen(port, function(){
    console.log('Server started at ports ' + port)
});