import express from "express"
import cookieParser from 'cookie-parser'
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { app, server } from "./socket/socket.js"

dotenv.config()

const PORT = process.env.PORT || 8000

// const app = express()
app.use(cookieParser())//for parsing cookies
app.use(express.json())//for parsing pplication/json

// app.get("/", (req, res) => {
    
//     res.send("Hello World 2")
// })
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes

)
server.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})

//Todo: Add socket.io to the server
//Todo: Configure this server for the deployment