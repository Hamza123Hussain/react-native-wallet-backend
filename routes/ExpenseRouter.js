import { Router } from 'express'
import { AddTransaction } from '../Controllers/AddTransaction.js'
import { GetUserTransaction } from '../Controllers/GetUserTransactions.js'

export const TransactionsRouter = Router()
TransactionsRouter.post('/AddTransaction', AddTransaction)
TransactionsRouter.get('/GetUserTransactions/:userid', GetUserTransaction)
