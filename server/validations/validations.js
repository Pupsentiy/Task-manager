import { body } from "express-validator";

export const loginValidation = [
    body('email','Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min:5}),
]

export const registerValidation = [
    body('email','Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min:5}),
    body('fullName','Укажите имя').isLength({min:3}),
    body('avatarUrl','Неверная ссылка на аватарку').optional().isURL()
]

export const boardCreateValidation = [
    body('title','Введите заголовок статьи').isLength({ min:1 }),
    body('background', 'Выберете фон').optional().isString(),
    body('isPublic','Укажите видимость (приватная/публичная)').isBoolean(),
    // что то придумать с видимостью для других участников !!!!!
]