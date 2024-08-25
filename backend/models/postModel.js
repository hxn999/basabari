import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userid:{
            type:String,
            trim:true
        },
        images:{
            type:Array
        },
        bed:{
            type:Number
        },
        bath:{
            type:Number
        },
        balcony:{
            type:Number
        },
        floorSize:{
            type:Number
        },
        description:{
            type:String
        },
        facilities:{
            type:Array
        },
        address:{
            type:String
        },
        mapSrc:{
            type:String
        },
        rent:{
            type:Number
        },
        charges:{
            type:Number
        },
        chargeCategory:{
            type:String
        },
        rentDate:{
            type:String
        },
       
    },{
        timestamps:true
    }
)

 const Post = mongoose.model("Post",postSchema)
export {Post}