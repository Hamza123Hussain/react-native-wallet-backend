import { sql } from '../Config/DBconfig.js'

export const DeleteTransaction = async (req, res) => {
  const { id } = req.params

  try {
    if (!id) {
      return res.status(400).json('ID IS MISSSING')
    }
    if (isNaN(parseInt(id))) {
      return res.status(400).json('Transaction ID IS Not Valid')
    }
    const result =
      await sql`DELETE FROM transcations WHERE id = ${id} RETURNING *`
    if (result.length === 0) {
      return res.status(404).json('Transaction Has Not Been Found')
    }
    return res.status(201).json(result)
  } catch (error) {
    console.log('ERROR CREATING THE TRANSACTION', error)
    return res.status(500).json('INTERNAL SERVER ERROR')
  }
}
