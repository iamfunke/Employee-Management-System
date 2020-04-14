const express = require('express')
const router = express.Router();
const EmployeeController = require('../controller/EmployeeController')

router.post('/register/employee', EmployeeController.registerEmployee)

router.get('/fetch/employee', EmployeeController.fetchAllEmployee)

router.get('/fetch/employee/:id', EmployeeController.fetchOneEmployee)

router.put('/update/employee/:id', EmployeeController.updateEmployee)

router.delete('/delete/employee/:id', EmployeeController.deleteEmployee)

module.exports = router;

