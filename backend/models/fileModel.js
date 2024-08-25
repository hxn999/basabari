import mongoose from "mongoose";

const fileSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        file:{
            type:String,
            required:true,
            trim:true
        }
       
    },{
        timestamps:true
    }
)

 const File = mongoose.model("File",fileSchema)
export {File}