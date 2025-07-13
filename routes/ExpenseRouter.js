import { Router } from 'express'
import { AddTransaction } from '../Controllers/AddTransaction.js'

export const ExpenseRouter = Router()
ExpenseRouter.post('/AddTransaction', AddTransaction)
