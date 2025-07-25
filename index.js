import express from 'express'
import dotenv from 'dotenv'
import { sql } from './Config/DBconfig.js'
import { TransactionsRouter } from './routes/ExpenseRouter.js'
import { MainRatelimiter } from './Config/Ratelimiter.js'

dotenv.config()
const App = express()

const PORT = process.env.PORT || 6000
App.use(express.json())
App.use(MainRatelimiter)
async function InitiDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transcations (
          id SERIAL PRIMARY KEY,
          userid VARCHAR(255) NOT NULL,
          title VARCHAR(255) NOT NULL,
          amount DECIMAL(10,2) NOT NULL,
          category VARCHAR(255) NOT NULL,
          createdat DATE NOT NULL DEFAULT CURRENT_DATE
          )`
    console.log('database has been connected')
  } catch (error) {
    console.log('DATABASE HAS NOT BEEN CONNECTED DUE TO ERROR', error)
    process.exit(1)
  }
}
App.use('/api/transactions', TransactionsRouter)

InitiDB().then(() => {
  App.listen(PORT, () => {
    console.log('APP HAS BEEN TURNED ON', PORT)
  })
})
