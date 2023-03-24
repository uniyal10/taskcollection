import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from "@/styles/Home.module.css"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })
import axios from "axios"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  function handleSubmit() {
    axios
      .post("/api/create", { email, password })
      .then(() => console.log("user added successfully"))
      .catch(() => console.log("something wrong"))
  }
  return (
    <div>
      <div>
        <div>
          <label htmlFor="">Email</label>
          <input onChange={e => setEmail(e.target.value)} type="text" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input onChange={e => setPassword(e.target.value)} type="password" />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}
