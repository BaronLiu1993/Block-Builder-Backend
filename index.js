import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()



app.listen(process.env.PORT, () => {
    console.log("Running on Port 8000")
})