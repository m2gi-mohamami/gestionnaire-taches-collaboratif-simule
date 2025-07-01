import express from 'express';
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoutes.js';
const app=express();
app.use(express.json());
app.use('/api',taskRoutes);
mongoose.connect('mongodb+srv://mohammediamira12:wV9OnkK5TiPoEJrW@cluster0.cayrkpt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.get('/',(req,res)=>{
    res.send('Hello from Node Api server');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});