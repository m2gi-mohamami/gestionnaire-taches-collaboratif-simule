import Task from '../models/Task.js';
const taskController = {

    async getTasks(req, res) {
        try {
            const tasks = await Task.find();
            res.json(tasks);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error fetching tasks' });
        }
    },
     async createTask(req,res){
        const{title,description,status}=req.body;

        try{
            const newTask=new Task({ 
                title,description,status

            });
            await newTask.save();
            res.status(201).json(newTask);
            

        }catch(err){
            console.error(err);
            res.status(500).json({error:'Error creating task'});
        }
    }

};
export default taskController;