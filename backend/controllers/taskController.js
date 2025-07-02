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
    },async getTasks_after(req, res) {
        try {
            const {after}=req.query;
            let filter={};
            if(after){
                const afterDate = new Date(after);
                filter.createdAt = { $gt: afterDate };
            }
            const tasks = await Task.find(filter).sort({createdAt:1}).limit(20);
            res.json(tasks);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Error fetching tasks' });
        }
    },
     async createTask(req,res){
        console.log('Creating task with data:', req.body);
        const{title,description,status}=req.body;

        try{
            const newTask=new Task({ 
                title,description,status

            });
            await newTask.save();
            res.status(201).json(newTask);
            console.log('Task created successfully:', newTask);


        }catch(err){
            console.error(err);
            res.status(500).json({error:'Error creating task'});
        }
    }

};
export default taskController;