import BoardModel from '../models/Board.js'
import User from "../models/User.js";


export const getAll = async (req,res) => {
    try {
        const boards = await BoardModel.aggregate([
            {
                $lookup: {
                        from: 'columns',
                    let: { boardId: '$_id' },
                    pipeline: [
                        { $match: { $expr: { $eq: ['$boardId', '$$boardId'] } } },
                        {
                            $lookup: {
                                from: 'cards',
                                let: { columnId: '$_id' },
                                pipeline: [{ $match: { $expr: { $eq: ['$columnId', '$$columnId'] } } }],
                                as: 'cards',
                            },
                        },
                    ],
                    as: 'columns',
                },
            },
        ]);
        // const boards = await BoardModel.find().populate('user', '-passwordHash').exec()
        res.json(boards)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Не удалось получить доски'
        })
    }
}

export const getOne = async (req,res) => {
    try {
        const boardId = req.params.id

       const board = await BoardModel.findById({_id:boardId})

        if(!board){
           return res.status(404).json({
                    message: "Доска не найдена"
                })
        }
        res.json(board)
    }catch (err) {
        console.log(err)
     return res.status(500).json({
            message:'Не удалось получить доску'
        })
    }
}

export const create = async (req,res) => {
    try{
        const doc = new BoardModel({
            title: req.body.title,
            background: req.body.background,
            isPublic: req.body.isPublic,
            user:req.userId
        })



        const board = await doc.save()

        await User.findByIdAndUpdate(
            {_id:req.userId},
            {$push: {'boards': board._id}},
            {new:true}
        )


        res.json(board)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Не удалось создать доску'
        })
    }
}

export const remove = async (req,res) => {
    try {
        const boardId = req.params.id
        const board = await BoardModel.findOneAndDelete({_id:boardId})
        if(!board){
           return res.status(404).json({
               message: 'Такой доски не существует'
           })
        }
           res.json({
               success:true
           })
    }catch (err) {
        console.log(err)
        return res.status(500).json({
            message:'Не удалось получить доску'
        })
    }
}

export const update = async (req,res) => {
    try {
        const boardId = req.params.id

        await BoardModel.updateOne({
            _id:boardId
        },{
            title: req.body.title,
            background:req.body.background,
            isPublic: req.body.isPublic,
            user:req.userId
        })
        res.json({
            success:true
        })
    }catch (err){
        console.log(err)
        return res.status(500).json({
            message:'Не удалось обновить доску'
        })
    }
}