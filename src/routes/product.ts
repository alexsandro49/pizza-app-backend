import express, { Request, Response } from "express"
import prisma from "../prisma"

const router = express.Router()

async function create(req: Request, res: Response) {
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

async function listAll(req: Request, res: Response) {
    const products = await prisma.product.findMany()

    res.send(products)
}


router.post("/product", create)
router.get("/product", listAll)

export {router as productRoutes}