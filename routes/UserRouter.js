import { Router } from 'express'
import { Signup } from '../Controllers/User/Signup.js'
import { SignIn } from '../Controllers/User/SignIn.js'

export const UserRouter = Router()
UserRouter.post('/Signup', Signup)
UserRouter.get('/Login', SignIn)
