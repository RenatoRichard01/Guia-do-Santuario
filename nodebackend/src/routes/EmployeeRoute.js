const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/EmployeeController');
const AdministradorController = require('../controllers/administradorController');


router.get('/list',EmployeeController.list);
router.post('/create',EmployeeController.create);
router.get('/get/:id', EmployeeController.get);
router.post('/update/:id',EmployeeController.update);
router.post('/delete',EmployeeController.delete);
//Administrador controller;
router.post('/create',AdministradorController.create);

// router.get('/test',EmployeeController.test );
// router.post('/create',(req,res)=>{
//   res.json({
//     status:"Employeed saved "+JSON.stringify(req.body)
//   });
// })

module.exports = router;
