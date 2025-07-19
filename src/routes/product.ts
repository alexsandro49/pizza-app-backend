import express, { Request, Response } from "express"
import prisma from "../prisma"

const router = express.Router()

async function register(req: Request, res: Response) {
    const {name, price, type, description, imageName } = req.body
    const product = await prisma.product.create({
        data: {
            name,
            price, 
            type, 
            description, 
            imageName
        }
    })

    res.send(product)
}


router.post("/product/register", register)

export {router as productRoutes}