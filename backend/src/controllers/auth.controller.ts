
import { Request, Response } from "express"
import bcryptjs from "bcryptjs"
import prisma from "../db/prisma.js"
import generateToken from "../utils/generateToken.js"

export const signup = async(req:Request, res:Response) => {
    try{
        const { fullName, username, password, confirmpassword, gender}= req.body
            if (!fullName || !username || !password || !confirmpassword || !gender) {
                return res.status(400).json({ error: 'All fields are required.' });
            }
        if(password!== confirmpassword) {
            return res.status(400).json({ error: "Password don't match"})
        }
        const user = await prisma.user.findUnique({ where: { username} })

    if(user){
        return res.status(400).json({error : "Username already exists"})
    }
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(password, salt)

     //https://avatar-placeholder.iran.liara.run/
     const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
     const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

     const newUser = await prisma.user.create({
        data: {
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilepic,
        }

     });
     if(newUser) {
        //generate token in a sec
        generateToken(newUser.id,res)
        res.status(201).json({
            id:newUser.id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic

        })
     }

    
   
    } catch (error) {
        console.log
     }
    

    
}

export const login = async(req:Request, res:Response) => {}
export const logout = async(req:Request, res:Response) => {}