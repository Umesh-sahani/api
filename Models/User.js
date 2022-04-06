const mongoose = require('mongoose');
const {Schema}  = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model('user', UserSchema);
module.exports=User;