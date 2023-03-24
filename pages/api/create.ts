// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import db from "../util/mongoose"
import mongoose from "mongoose"
import { userAgent } from "next/server"
type Data = {
  name: string
}

db()

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
})

const User = mongoose.model("User", userSchema)

// const saveStudent = async (name, age) => {

//   await s.save();
//   console.log("student document saved in database\n
//       Student name:", s.name);
// };

const saveUser = async (email, password) => {
  return new Promise(async (resolve, reject) => {
    let s = new User({
      email: email,
      password: password
    })
    try {
      await s.save()
      resolve("added successfully")
    } catch (err) {
      reject("something wrong")
    }
  })
}
export default function create(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    saveUser(req.body.email, req.body.password).then(() => res.send("added successfully"))
  } catch (err) {
    res.send("somethinf wrong")
  }
}
