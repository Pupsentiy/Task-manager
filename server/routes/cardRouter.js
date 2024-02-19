import {checkAuth, handleValidationErrors} from "../utils/index.js";
import {CardController} from "../controllers/index.js";
import {cardCreateValidation} from "../validations/validations.js";
import {Router} from "express";

const router = new Router()

router.get('/', checkAuth, CardController.getAll)
router.get('/:id', checkAuth, CardController.getOne)
router.post('/', checkAuth, cardCreateValidation,  handleValidationErrors, CardController.create)
router.delete('/:id', checkAuth, CardController.remove)
router.patch('/:id', checkAuth, cardCreateValidation, handleValidationErrors, CardController.update)

export default router