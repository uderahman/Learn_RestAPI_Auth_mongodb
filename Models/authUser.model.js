import mongoose from "mongoose";

const {Schema} = mongoose;

const authUser= new Schema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min:6,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model('user', authUser);