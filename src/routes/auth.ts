import express, { Request, Response } from "express"
import prisma from "../prisma"

const router = express.Router()

async function register(req: Request, res: Response) {
    const {name, email, password} = req.body
    const user = await prisma.user.create({
        data: {
            name: name, 
            email: email,
            password: password
        }
    })

    res.send(user)
}

async function login(req: Request, res: Response) {
    const {email, password} = req.body
    const user = await prisma.user.findUniqueOrThrow({
        where: {email, password} 
    })

    res.send(user)
}


router.post("/auth/register", register)
router.post("/auth/login", login)

export {router as authRoutes}