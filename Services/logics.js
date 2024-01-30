//import db.js
const db = require('../Services/db')

//logic for get all employees from database
const getAllEmployees =()=>{
    return db.employee.find().then(
       (result)=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:400,
                message:'Employees not found'
            }
           
        }
       }
    )
}
//logic to add employee to database
const  AddEmployee=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        //if data is in databaase
        if(result){
            return{
                statusCode:404,
                message:"employee already exist"
            }
        }
        else{
            
                // data is not present in db, to save all data in db

                const newEmployee=new db.employee({id,name,age,designation,salary})
                newEmployee.save()
                return{
                    statusCode:200,
                    message:"employee added sucessfully...."
                }

            
        }
    })

}

//logic for delete employee

const deleteEmployee=(id)=>{
    return db.employee.deleteOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                message:'employee delected sucessfully'
            }
        }

        
        
        
    })
    .catch((error)=>{

       return{
        statusCode:400,
        message:'employee dont exist'
       }

    })
}


const viewEmployee=(id)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                viewemployee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"employee not found"
            }
        }
       
    })

        
    
}



const updateEmployee=(id,name,age,designation,salary)=>{
    return db.employee.findOne({id}).then((result)=>{
        if(result){

            //assign updates employee details to mongodb object
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;

            //to save new details to mongoDB
            result.save();




            return{
                statusCode:200,
                message:'employee details updated succesfully'
            }
        }
        else{
            return{
                statusCode:404,
                message:'employee not found'
            }
        }
    })

}

module.exports={
    getAllEmployees,
    AddEmployee,
    deleteEmployee,
    viewEmployee,
    updateEmployee
}