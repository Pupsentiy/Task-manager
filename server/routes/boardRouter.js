import {checkAuth, handleValidationErrors} from "../utils/index.js";
import {boardCreateValidation} from "../validations/validations.js";
import * as BoardController from "../controllers/BoardController.js";
import {Router} from "express";

const router = new Router()

router.get('/', checkAuth, BoardController.getAll)
router.get('/:id', checkAuth, BoardController.getOne)
router.post('/', checkAuth, boardCreateValidation, handleValidationErrors, BoardController.create)
router.delete('/:id', checkAuth, BoardController.remove)
router.patch('/:id', checkAuth, boardCreateValidation, handleValidationErrors, BoardController.update)

export default router