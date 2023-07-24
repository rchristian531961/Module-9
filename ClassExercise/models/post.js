const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
 title:{type:String,required:true},
 description:{type:String, required:true},
 likes:{type:Number, default:0},
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("post", userSchema);
