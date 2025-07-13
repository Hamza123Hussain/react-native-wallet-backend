import { sql } from '../Config/DBconfig.js'

export const GetTransactionSummary = async (req, res) => {
  const { userid } = req.params
  try {
    if (!userid) {
      res.status(400).json('USER ID IS MISSSING')
    }
    const balence =
      await sql`SELECT COALESCE(SUM(amount),0) FROM transcations WHERE userid = ${userid}`
    const Income =
      await sql`SELECT COALESCE(SUM(amount),0) FROM transcations WHERE userid = ${userid} AND amount > 0`
    const Expense =
      await sql`SELECT COALESCE(SUM(amount),0) FROM transcations WHERE userid = ${userid} AND amount < 0`
    return res.status(200).json({
      balence: balence[0].coalesce,
      Income: Income[0].coalesce,
      Expense: Expense[0].coalesce,
    })
  } catch (error) {
    console.log('ERROR CREATING THE TRANSACTION', error)
    res.status(500).json('INTERNAL SERVER ERROR')
  }
}
