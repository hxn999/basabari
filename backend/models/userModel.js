import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            trim:true
        },
        phone:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
            trim:true
        },
        user_id:{
            type:String,
            required:true,
            trim:true
        },
        pfpSrc:{
            type:String,
            required:true,
            trim:true
        },
        name:{
            type:String,
            required:true,
            trim:true
        },
        address:{
            type:String,
            required:true,
            trim:true
        },
        area:{
            type:String,
            // required:true,
            trim:true
        },
        
        refreshToken:{
            type:String,
            required:true,
            trim:true
        },
        
        
        lat:{
            type:Number,
        },
        long:{
            type:Number,
        },
       
    },{
        timestamps:true
    }
)

const User = mongoose.model("User",userSchema)
export {User}