import 'dotenv/config'

import { neon } from '@neondatabase/serverless'
dotenv.config()
export const sql = neon(process.env.databaseurl)
