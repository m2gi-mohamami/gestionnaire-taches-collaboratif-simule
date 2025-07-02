
import express from 'express';
import taskController from '../controllers/taskController.js';
const router=express.Router();

router.get('/test',(req,res)=>{
    res.send('Hello from Node test route');
});

router.get('/', (req, res) => {
    res.send('Hello from Node Api server');
});

router.get('/tasks', (req, res) => {
    
    taskController.getTasks(req, res);
   

});



router.post('/tasks', (req, res) => {
    taskController.createTask(req, res);
    console.log('Task created');
});

export default router;