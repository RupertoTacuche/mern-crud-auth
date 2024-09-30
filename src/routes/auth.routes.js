import {Router } from 'express'
import {register, login, logout} from '../controlllers/auth.controller.js'

const router = Router()

/* exporto las rutas */
router.post('/register', register)
router.post('/login', login)
router.post("/logout", logout)


export default router

