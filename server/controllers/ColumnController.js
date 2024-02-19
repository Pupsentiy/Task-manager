import ColumnModel from "../models/Column.js";

export const getAll = async (req,res) => {
    try {
        const columns = await ColumnModel.find()
        res.status(200).json(columns)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Не удалось получить столбцы!!'
        })
    }
}

export const getOne = async (req,res) => {
    try {
        const columnId = req.params.id

        const column = await ColumnModel.findById({_id:columnId})

        if(!column){
            return res.status(404).json({
                message: "Колонка не найдена!"
            })
        }

        res.status(200).json(column)
    }catch (err) {
        console.log(err)
        return res.status(500).json({
            message:'Не удалось получить колонку!'
        })
    }
}

export const create = async (req,res) => {
    try{
        const doc = new ColumnModel({
            title: req.body.title,
            boardId: req.body.boardId,
            user:req.userId
        })

        const column = await doc.save()

        res.status(200).json(column)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Не удалось создать колонку!'
        })
    }
}

export const update = async (req,res) => {
    try {
        const columnId = req.params.id

        await ColumnModel.updateOne({
            _id:columnId
        },{
            title: req.body.title,
        },{
            new:true
        })
        res.status(200).json({
            success:true
        })
    }catch (err){
        console.log(err)
        return res.status(500).json({
            message:'Не удалось обновить колонку!'
        })
    }
}

export const remove = async (req,res) => {
    try {
        const columnId = req.params.id
        const column = await ColumnModel.findOneAndDelete({_id:columnId})
        if(!column){
            return res.status(404).json({
                message: 'Такой колнки не существует!'
            })
        }
        res.status(200).json({
            success:true
        })
    }catch (err) {
        console.log(err)
        return res.status(500).json({
            message:'Не удалось получить колонку!'
        })
    }
}