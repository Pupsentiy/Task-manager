import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
        title:{
            type: String,
            required:true
        },
        description:{
            type:String
        },
        tag:{
            type:Array,

        },

        position:{
            type:String,
            required: true
        },
        column:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Column"
        }
    },
    {
    timestamps:true
    })

export default mongoose.model("Card", CardSchema)