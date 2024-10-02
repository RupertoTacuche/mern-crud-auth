
import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    }, 
    description: {
        type: String,
        required: true, 
    }, 
    date: {
        type: Date, 
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // This references the User model by id.  'User' is the model name.  'user' is the field name in the Task model.  This field will store the id of the user who created the task.  When we fetch a task, we will also fetch the user information by referencing this field.  This is a one-to-many relationship.  When a user is deleted, all tasks created by that user will also be deleted.  When a task is deleted, the user field will be set to null to prevent a reference error.  This is a way to maintain data integrity.  It's a good practice to have this field in your schema.  If you don't want to maintain this relationship, you can remove this field from your schema.  But if you want to maintain this relationship, it's a good practice to have it in your schema.  This
        required: true
    }
},{
    timestamps: true
});

export default mongoose.model('Task', taskSchema)
