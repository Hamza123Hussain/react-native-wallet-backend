import 'dotenv/config'
import { neon } from '@neondatabase/serverless'
export const sql = neon(process.env.databaseurl)
