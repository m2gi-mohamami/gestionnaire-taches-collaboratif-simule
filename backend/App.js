import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoutes.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

const app=express();
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello from Node Api server');
});
app.use('/api',taskRoutes);
