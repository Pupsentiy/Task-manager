import Router from 'express'
import userRouter from "./userRouter.js";
import boardRouter from "./boardRouter.js";
import columnRouter from "./columnRouter.js";
import cardRouter from "./cardRouter.js";

const router = new Router()

router.use('/card', cardRouter)
router.use('/column', columnRouter)
router.use('/board', boardRouter)
router.use('/auth', userRouter)

export default router