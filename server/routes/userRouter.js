import {loginValidation, registerValidation} from "../validations/validations.js";
import {checkAuth, handleValidationErrors} from "../utils/index.js";
import * as UserController from "../controllers/UserController.js";
import {Router} from "express";

const router = new Router()

router.post('/login', loginValidation, handleValidationErrors, UserController.login)
router.post('/register', registerValidation, handleValidationErrors, UserController.register)
router.get('/me', checkAuth, UserController.getMe)

export default router