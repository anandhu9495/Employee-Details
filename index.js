//impoert express
const express= require('express')

//import cors
const cors= require('cors')

//import logic
const logic= require('./Services/logics')
const { employee } = require('./Services/db')

//create an application using express
const emsServer= express()

//using cors to connect frontend port
emsServer.use(cors({
    origin:'http://localhost:3000'
}))

//create a middleware for parsing json data
emsServer.use(express.json())

//define a port number
emsServer.listen(8000,()=>{
    console.log("emsServer listening on the port 8000");
})

//API call for get all employees
emsServer.get('/get-all-employees',(req,res)=>{
    logic.getAllEmployees().then((response)=>{
        res.status(response.statusCode).json(response)
    })

})

//API call for add an employee -localhost:8000/add-employee
emsServer.post('/add-employee',(req,res)=>{
    logic.AddEmployee(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })

})



emsServer.delete('/delete-employee/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response )
    })
})



emsServer.get('/view-employee/:id',(req,res)=>{
    logic.viewEmployee(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})


emsServer.post('/update-all-employees/:id',(req,res)=>{
    logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((response)=>{
        res.status(response.statusCode).json(response)
    })

})
