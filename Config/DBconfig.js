import 'dotenv/config'
import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless'
dotenv.config()
export const sql = neon(process.env.databaseurl)
