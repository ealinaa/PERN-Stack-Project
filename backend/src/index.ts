import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())//for parsing pplication/json

// app.get("/", (req, res) => {
    
//     res.send("Hello World 2")
// })
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes

)
app.listen(5000, () => {
    console.log("Server is running on port 5000")
})