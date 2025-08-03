// Import the mongoose library to interact with MongoDB
import mongoose from 'mongoose'
// This function is responsible for establishing a connection to MongoDB
import dotenv from 'dotenv'
dotenv.config()
export const DB_CONNECTED = async () => {
  try {
    // Use mongoose.connect() to connect to MongoDB
    // Mongo_url is the connection string (e.g., "mongodb://localhost:27017/internDB")
    const data = await mongoose.connect(process.env.DBURL)

    // If connection is successful, log a success message
    if (data) console.log('✅ DB CONNECTED')
  } catch (error) {
    // If connection fails, catch the error and display it
    console.log('❌ DB ERROR', error)
  }
}
