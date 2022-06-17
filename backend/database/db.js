import mongoose from "mongoose";
const Connection=async ()=>{

    const URL=`mongodb://user:tfYN6SiOvuoDlUdm@crud-app-shard-00-00.wa7bx.mongodb.net:27017,crud-app-shard-00-01.wa7bx.mongodb.net:27017,crud-app-shard-00-02.wa7bx.mongodb.net:27017/crud-app?ssl=true&replicaSet=atlas-138g5c-shard-0&authSource=admin&retryWrites=true&w=majority`;
   
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log('database connected successful')
     }catch(error){
        console.log('error while creating database',error);
     }
   }


export default Connection;




