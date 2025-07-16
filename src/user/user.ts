import express, { Request, Response } from "express"
import prisma from "../prisma"

const router = express.Router()

async function listAllUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany()

    res.send(users)
}

async function createUser(req: Request, res: Response) {
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

router.get("/user", listAllUsers)
router.post("/user", createUser)

export {router as userRoutes}