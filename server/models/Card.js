import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
        title:{
            type: String,
            required:true
        },
        description:{
            type:String
        },
        tags:{
            type:Array,
        },
        // position:{
        //     type:String,
        //     required: true
        // },
        columnId:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref: "Column"
        },

    },
    {
    timestamps:true
    })

export default mongoose.model("Card", CardSchema)