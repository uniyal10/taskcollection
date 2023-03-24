import { connection, connect } from "mongoose"

const url = "mongodb+srv://uniyal10:l6UmyrDmE3Pn6a2E@cluster0.qn0gs.mongodb.net/newCollection?retryWrites=true&w=majority"

export default async function dbConnect() {
  const db = await connect(url)

  console.log(db.connection.db.databaseName)
}
