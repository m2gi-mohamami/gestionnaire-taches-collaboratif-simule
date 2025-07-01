import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: { type: String, required: true ,unique: true},
    description: String,
    status: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Task', TaskSchema);