import mongoose, { now } from 'mongoose';

const postSchema = mongoose.Schema({
    from:String,
    name:String,
    email: String,
    date: {
        type:String
    },
    message: String,
    selectedFile:String,
    createdAt: {
        type: Date,
        default:  Date.now(),
    },
    
    
})

const PostMessage = mongoose.model('WishDetails', postSchema);

export default PostMessage;