import {checkAuth, handleValidationErrors} from "../utils/index.js";
import {Router} from "express";
import {ColumnController} from "../controllers/index.js";
import {columnCreateValidation} from "../validations/validations.js";

const router = new Router()

router.get('/', checkAuth, ColumnController.getAll)
router.get('/:id', checkAuth, ColumnController.getOne)
router.post('/', checkAuth, columnCreateValidation, handleValidationErrors, ColumnController.create)
router.delete('/:id', checkAuth, ColumnController.remove)
router.patch('/:id', checkAuth, columnCreateValidation, handleValidationErrors, ColumnController.update)

export default router