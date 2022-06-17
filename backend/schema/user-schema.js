import mongoose from "mongoose";

var Schema = mongoose.Schema;
var users = new Schema({
     name: String,
    email: String,
    phone: String,
    
});
 const user = mongoose.model("user", users);



export default user;

