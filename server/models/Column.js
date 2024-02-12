import mongoose from "mongoose";

const ColumnSchema = new mongoose.Schema({
        title:{
            type: String,
            required:true
        },
        // position:{
        //     type:String,
        //     required: true
        // },
        boardId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Board",
            required:true,
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true,
        }
    },
    {
        timestamps:true
    })

export default mongoose.model("Column", ColumnSchema)