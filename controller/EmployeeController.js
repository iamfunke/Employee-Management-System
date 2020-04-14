const Employee = require('../database/models/').Employee

class EmployeeController{

// Method to create a new employee    
static registerEmployee(req, res){
    try{
        const {firstname, lastname, phone, age} = req.body;

        let employeeData = {
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        age: age
        }

        Employee.create(employeeData).then(response=>{
        return res.status(200).json({
            error:false,
            message:'Employee data registered',
            data: response
        })
        }).catch(err=>{
            return res.send('Error')
        })
    }catch(e){
        return res.sendStatus(500)
    }
}

// Method to view all employee
static fetchAllEmployee(req, res){
    try{
        Employee.findAll().then(response=>{
            if(response.length > 0){
                return res.status(200).json({
                    error:false,
                    message: 'All registered Employees',
                    data:response
                })
            }else{
                return res.status(204).json({
                    error:true,
                    message: 'No Registered Employees',
                    data:[]
                })
            }
            
        }).catch(error=>{
            return res.send('Error')
        })
    }catch(e){
        return res.sendStatus(500)
    }
}

// Method to view a particular employee
static fetchOneEmployee(req, res){
    try{
        let id = req.params.id
        Employee.findOne({
            where:{id:id}
        }).then(response=>{
                if(response){
                    return res.status(200).json({
                        error:false,
                        message: 'Employee Single Data',
                        data: response
                    })
                }else{
                    return res.status(200).json({
                        error:true,
                        message: 'No Single Data',
                        data:[]
                    })
                }
                
            
        }).catch(error=>{
            return res.send('No employee with such ID')
        })
    }catch(e){
        return res.sendStatus(500)
    }
}

// Method to update an employee
static updateEmployee(req, res){
    try{
        let id = req.params.id
        const {firstname, lastname, phone, age} = req.body
        let updateEmployee = {
            firstname:firstname,
            lastname:lastname,
            phone:phone,
            age:age
        }
        Employee.update(updateEmployee, {
            where:{id:id}
        }).then(response=>{
            return res.status(201).json({
                error:false,
                message:'Employee data updated.',
                data: updateEmployee
            })
        }).catch(error=>{
            return res.send('Error')
        })
    }catch(e){
        return res.sendStatus(500)
    }
}

// Method to delete an employee
static deleteEmployee(req, res){
    try{
        let id = req.params.id
        Employee.destroy({
            where: {id:id}
        }).then(response=>{
            return res.status(200).json({
                error:false,
                message: 'Employee data deleted'
            })
        }).catch(error=>{
            return res.send('Error')
        })
    }catch(e){
        return res.sendStatus(500)
    }
}
}
module.exports = EmployeeController;