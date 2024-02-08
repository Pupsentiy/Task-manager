import CardModel from "../models/Card.js";

export const getAll = async (req,res) => {
    try {
        const cards = await CardModel.find()
        res.json(cards)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Не удалось получить карточки!'
        })
    }
}

export const getOne = async (req,res) => {
    try {
        const cardId = req.params.id

        const card = await CardModel.findById({_id:cardId})

        if(!card){
            return res.status(404).json({
                message: "Карточка не найдена!"
            })
        }

        res.json(card)
    }catch (err) {
        console.log(err)
        return res.status(500).json({
            message:'Не удалось получить карточку!'
        })
    }
}

export const create = async (req,res) => {
    try{
        const doc = new CardModel({
            title: req.body.title,
            columnId: req.body.columnId,
        })

        const card = await doc.save()

        res.json(card)
    }catch (err) {
        console.log(err)
        res.status(500).json({
            message:'Не удалось создать карточку!'
        })
    }
}

export const remove = async (req,res) => {
    try {
        const cardId = req.params.id
        const card = await CardModel.findOneAndDelete({_id:cardId})
        if(!card){
            return res.status(404).json({
                message: 'Такой карточки не существует!'
            })
        }
        res.json({
            success:true
        })
    }catch (err) {
        console.log(err)
        return res.status(500).json({
            message:'Не удалось получить карточку!'
        })
    }
}

export const update = async (req,res) => {
    try {
        const cardId = req.params.id

        await CardModel.updateOne({
            _id:cardId
        },{
            title: req.body.title,
            description:req.body.description,
            tags:req.body.tags
        })
        res.json({
            success:true
        })
    }catch (err){
        console.log(err)
        return res.status(500).json({
            message:'Не удалось обновить карточку!'
        })
    }
}