import express from "express"
import cookieParser from 'cookie-parser'
import path from 'path'
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { app, server } from "./socket/socket.js"

dotenv.config()

const PORT = process.env.PORT || 8000
const __dirname = path.resolve()

// const app = express()
app.use(cookieParser())//for parsing cookies
app.use(express.json())//for parsing pplication/json

// app.get("/", (req, res) => {
    
//     res.send("Hello World 2")
// })
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)

    //frontend localhost:5173
    //backend localhost: 8000
    if (process.env.NODE_ENV !== "development") {
        app.use(express.static(path.join(__dirname, "/frontend/dist")));
        app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
        });
    
    }

server.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})

//Todo: Add socket.io to the server
//Todo: Configure this server for the deployment

// import express from "express"
// import authRoutes from "./routes/auth.route.js"
// import messageRoutes from "./routes/message.route.js"
// import cookieParser from "cookie-parser"
// import path from "path"

// import dotenv from "dotenv"
// import { app, server } from "./socket/socket.js"
// dotenv.config()

// const PORT = process.env.PORT || 8000
// const __dirname = path.resolve()

// // const app = express()

// app.use(cookieParser())// for parsing coookies
// app.use(express.json()) //for parsing application/json

// app.use("/api/auth",authRoutes)
// app.use("/api/messages",messageRoutes)

// if (process.env.NODE_ENV !== "development") {
// 	app.use(express.static(path.join(__dirname, "/frontend/dist")));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// 	});
// }
// server.listen(PORT, () =>{
//     console.log("Server is running on port " + PORT)
// })

