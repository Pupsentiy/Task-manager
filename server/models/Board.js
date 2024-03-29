import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
        title:{
            type: String,
            required:true
        },
        background:{
            type: String,
            required: true,
        },
        isPublic:{
            type: Boolean,
            required:true
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true
        }
    },
    {
        timestamps:true
    })

export default mongoose.model("Board", BoardSchema)