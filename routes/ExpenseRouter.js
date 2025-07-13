import { Router } from 'express'
import { AddTransaction } from '../Controllers/AddTransaction.js'
import { GetUserTransaction } from '../Controllers/GetUserTransactions.js'
import { DeleteTransaction } from '../Controllers/DeleteTransaction.js'
import { GetTransactionSummary } from '../Controllers/GetTransactionSummary.js'

export const TransactionsRouter = Router()
TransactionsRouter.post('/AddTransaction', AddTransaction)
TransactionsRouter.get('/GetUserTransactions/:userid', GetUserTransaction)
TransactionsRouter.delete('/DeleteTransaction/:id', DeleteTransaction)
TransactionsRouter.get('/TransactionSummary/:userid', GetTransactionSummary)
