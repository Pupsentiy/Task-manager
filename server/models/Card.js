import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
        title:{
            type: String,
            required:true
        },
        description:{
            type:String,
            default:''
        },
        dueDate: {
            type: Date,
            default: null
        },
        labels: {
            type: [String],
            default: []
        },
        // position:{
        //     type:String,
        //     required: true
        // },
        cover:{type:String},
        checklist: {
        type: [{
            title: String,
            completed: {
                type: Boolean,
                default: false
            }
        }]},
        comments: {
            type: [{
                text: String,
                date: {
                    type: Date,
                    default: Date.now
                },
                author: String
            }],
            default: []
        },
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