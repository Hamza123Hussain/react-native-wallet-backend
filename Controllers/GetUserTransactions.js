import { sql } from '../Config/DBconfig.js'

export const GetUserTransaction = async (req, res) => {
  const { userid } = req.params
  try {
    if (!userid) {
      res.status(400).json('USER ID IS MISSSING')
    }
    const transactions =
      await sql`SELECT * FROM transcations WHERE userid = ${userid} ORDER BY createdat ASC`
    console.log(transactions)
    res.status(201).json(transactions)
  } catch (error) {
    console.log('ERROR CREATING THE TRANSACTION', error)
    res.status(500).json('INTERNAL SERVER ERROR')
  }
}
