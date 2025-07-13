import { sql } from '../Config/DBconfig.js'

export const AddTransaction = async (req, res) => {
  const { category, amount, title, userid } = req.body
  try {
    if (!title || !amount || !category || !userid) {
      res.status(400).json('Enter All Fields')
    }
    const transaction =
      await sql`INSERT INTO transcations(userid,title,amount,category)
    VALUES (${userid},${title},${amount},${category})
    RETURNING *
    `
    console.log(transaction)
    res.status(201).json(transaction[0])
  } catch (error) {
    console.log('ERROR CREATING THE TRANSACTION', error)
    res.status(500).json('INTERNAL SERVER ERROR')
  }
}
